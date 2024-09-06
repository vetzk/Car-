import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../prisma';
import { compareSync } from 'bcrypt';

// Local Strategy for username/password authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { username },
        });
        // If user is not found or password does not match
        if (!user || !compareSync(password, user.password)) {
          return done(null, false, { message: 'Invalid credentials' });
        }
        if (user.isDeleted || !user.isEmailVerified) {
          return done(null, false, {
            message: 'Account is not active or email not verified',
          });
        }

        // Authentication successful
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

// Google OAuth Strategy for Google login
passport.use(
  new GoogleStrategy(
    {
      clientID: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      //profile itu isinya data dari google dari yg kita daftar sebelumnya
      /**
       * isinya adalah: 
       * {
          "id": "1234567890", // The user's unique Google ID
          "displayName": "John Doe", // The user's full name as displayed on their Google profile
          "name": {
            "familyName": "Doe", // The user's last name
            "givenName": "John"  // The user's first name
          },
          "emails": [
            {
              "value": "john.doe@gmail.com", // The user's email address
              "verified": true
            }
          ],
          "photos": [
            {
              "value": "https://lh3.googleusercontent.com/a-/AOh14Gi7i-..." // URL to the user's profile picture
            }
          ],
          "provider": "google" // The provider of the OAuth service (Google in this case)
        }
       */
      try {
        let user = await prisma.user.findFirst({
          where: {
            googleId: profile.id,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              googleId: profile.id,
              identificationCode: profile.id,
              role: 'USER',
              password: '',
              email: profile.emails?.[0].value || '',
              username: profile.id,
              isEmailVerified: true,
              //accessToken ditaruh disini bisa utk akses google drive attau goolge calendar
              //refreshToken ini utk keepLogin, if your application is expected to make repeated API calls without requiring the user to re-authenticate each time.
            },
          });
        }

        if (user.isDeleted) {
          return done(null, false, { message: 'Account is not active' });
          //done adalah fungsi yang menandakan bahwa auth sudah selesai
        }
        done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    done(null, user);
  } catch (error) {
    return done(error);
  }
});

export default passport;

/**
 * To obtain the clientID and clientSecret for Google OAuth, you need to set up a project in the Google Developer Console. Here’s how you can get these credentials:

1. Create a Google Cloud Project
Go to the Google Cloud Console.

Create a New Project:

Click on the project dropdown at the top of the page.
Click on "New Project."
Enter a project name and click "Create."
2. Enable Google OAuth APIs
Navigate to the API & Services Dashboard.

Enable OAuth 2.0 APIs:

Click on "Enable APIs and Services."
Search for "Google+ API" and enable it. (Note: Google+ API is used for profile data; depending on the scope, other APIs might be required.)
Also, search for "Google Identity Toolkit API" and enable it if needed.
3. Create OAuth 2.0 Credentials
Go to the Credentials Page.

Create OAuth 2.0 Client IDs:

Click on "Create Credentials" and select "OAuth 2.0 Client ID."
Configure the consent screen if you haven't already:
Click on "OAuth consent screen" on the left menu.
Choose "External" or "Internal" depending on your needs, and fill in the required information.
Go back to the "Credentials" page and complete the form:
Application type: Select "Web application."
Name: Give your OAuth 2.0 client a name.
Authorized JavaScript origins: Add the origin of your app (e.g., http://localhost:3000 for local development).
Authorized redirect URIs: Add the URI where Google will redirect after authentication (e.g., http://localhost:3000/api/auth/google/callback).
Obtain Your Client ID and Client Secret:

After creating the OAuth 2.0 client ID, you will be given a clientID and clientSecret.
Copy these values and store them securely.
4. Set Up Environment Variables
To use these credentials in your application, you should set them up as environment variables. Here’s how you can do it:

Create a .env File:

In your project’s root directory, create a .env file if you don’t already have one.

Add Your Credentials to the .env File:

GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
Load Environment Variables:

Ensure that you are using a library like dotenv to load these environment variables in your application.

npm install dotenv
At the beginning of your main app file (e.g., app.ts), add:


import dotenv from 'dotenv';
dotenv.config();
By following these steps, you’ll obtain the clientID and clientSecret needed for Google OAuth authentication and set them up in your application.








 */
