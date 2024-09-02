import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  // service: 'Gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.SENDER_PASS,
  },
});

export const sendOTP = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; otp: string },
) => {
  try {
    const message = `Your OTP code is ${data?.otp}. It will expire in 10 minutes`;

    await transporter.sendMail({
      from: process.env.EMAIL_SENDER,
      to: emailTo,
      subject: subject,
      html: message,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
