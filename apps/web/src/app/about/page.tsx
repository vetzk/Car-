import Image from 'next/image';
import * as React from 'react';

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div className="w-full mt-32 flex flex-col justify-center items-center gap-20">
      <div className="w-3/4 min-h-[40vh] rounded-xl relative overflow-hidden">
        <Image
          src="/pexels-maria-geller-801267-2127012.jpg"
          alt="car"
          layout="fill"
          objectFit="cover"
        />
        {/* Child element with rounded bottom right */}
        <div className="w-1/2 bg-white rounded-br-xl inset-32 top-0 left-0 absolute clip-custom pr-4">
          <div className="w-full p-5 border-solid border rounded-xl border-black flex flex-col gap-2">
            <p className="text-5xl text-center font-bold">About</p>
            <p className="text-xl text-center">
              We are the leading automotive industry in the world. Get to know
              people behind our success
            </p>
          </div>
        </div>
        {/* Small element positioned bottom-left */}
        <div className="w-12 absolute bottom-0 rounded-tl-xl bg-transparent h-32 bg-[radial-gradient(ellipse at top, #ff0000, transparent)] custom-shadow"></div>
        <div className="w-12 absolute top-0 left-[35.6rem] rounded-tl-xl bg-transparent h-12 bg-[radial-gradient(ellipse at top, #ff0000, transparent)] custom-shadow"></div>
        <div className="w-24 absolute right-0 bottom-0 rounded-tl-xl bg-white h-14"></div>
        <div className="w-14 absolute -right-[0.1rem] bottom-[3.5rem] rounded-br-xl bg-transparent h-3 custom-shadow-bottom"></div>
        <div className="w-12 absolute right-[5.9rem] bottom-[0rem] rounded-br-xl bg-transparent h-3 bg-[radial-gradient(ellipse at top, #ff0000, transparent)] custom-shadow-bottom-l"></div>
      </div>
      <div className="w-full min-h-[70vh] flex justify-between p-10">
        <div className="w-full relative flex pl-20">
          <Image
            src={'/businessman-video-conferencing.jpg'}
            alt="salesman"
            width={300}
            height={100}
            className="rounded-xl absolute top-0 right-[29rem]"
          />
          <Image
            src={'/front-view-salesman-checking-car.jpg'}
            alt="salesman"
            width={300}
            height={100}
            className="absolute top-16 right-[12rem] rounded-xl"
          />
        </div>
        <div className="w-3/4 flex-col flex p-10 gap-5">
          <p>Our Values</p>
          <p className="text-5xl">Innovative.</p>
          <p className="text-5xl">Teamwork.</p>
          <p className="text-5xl">Passion.</p>
          <p className="text-5xl">Integrity.</p>
          <p>
            {' '}
            Emphasize a commitment to continuously pushing the boundaries of
            automotive design, technology, and engineering. Highlight your focus
            on creating groundbreaking solutions that enhance vehicle
            performance, safety, and sustainability.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between py-10 px-20">
        <div className="w-1/3 flex flex-col gap-5">
          <p>Our Mission</p>
          <p className="text-4xl">To revolutionize the automotive industry</p>
          <p className="text-xl">
            We strive to create vehicles that embody cutting-edge technology,
            exceptional craftsmanship, and outstanding performance while
            fostering a culture of integrity, safety, and customer satisfaction
          </p>
        </div>
        <div className="relative w-1/2 min-h-[60vh]">
          <Image
            src="/african-american-auto-mechanic-his-coworker-communicating-with-their-manager-repair-shop.jpg"
            layout="fill"
            alt="mechanic"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="w-full flex flex-col px-20">
        <div className="w-full justify-center flex flex-col items-center gap-5">
          <p className="text-7xl font-bold">Meet Our Team</p>
          <p className="text-xl text-center">
            A Diverse Group of Innovators, Collaborators, and Problem Solvers,{' '}
            <br /> United by a Love for Cars and a Commitment to Excellence
          </p>
        </div>
        <div className="w-full min-h-screen flex gap-5 justify-between items-center">
          <div className="w-full flex flex-col gap-5 relative">
            <div className="w-full">
              <Image
                alt="person"
                src="/portrait-young-asia-lady-with-positive-expression-arms-crossed-smile-broadly-dressed-casual-clothing-looking-camera-pink-background.jpg"
                width={600}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="w-full">
              {' '}
              <p className="text-center text-2xl">Sarah Amber</p>
              <p className="text-center text-lg">CEO</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 relative">
            <div className="w-full">
              <Image
                alt="person"
                src="/portrait-young-asia-lady-with-positive-expression-arms-crossed-smile-broadly-dressed-casual-clothing-looking-camera-pink-background.jpg"
                width={600}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="w-full">
              {' '}
              <p className="text-center text-2xl">Sarah Amber</p>
              <p className="text-center text-lg">Finance Manager</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 relative">
            <div className="w-full">
              <Image
                alt="person"
                src="/content-confident-handsome-asian-businessman-looking-camera.jpg"
                width={600}
                height={200}
                className="rounded-xl"
              />
            </div>
            <div className="w-full">
              {' '}
              <p className="text-center text-2xl">James Wong</p>
              <p className="text-center text-lg">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
