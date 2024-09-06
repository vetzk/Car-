import * as React from 'react';
import Image from 'next/image';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center border-t-slate-600 border-t-2 bg-black/85 p-20 gap-5">
      <div className="w-full">
        <Image
          src="/tesla.png"
          alt="tesla"
          width={500}
          height={500}
          className="w-24 h-24"
        />
      </div>
      <div className="w-full flex justify-between gap-32">
        <div className="w-3/4 flex-col flex gap-10 items-center">
          <div className="w-full text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit culpa eius facilis dolorum qui ducimus rerum
            </p>
          </div>
          <div className="w-full relative">
            <Input
              className="w-3/4 rounded-none p-6 text-white"
              type="text"
              placeholder="Your email address"
            />
            <Button className="absolute right-[10rem] bottom-1.5 rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full flex flex-col gap-3 text-white">
            <p className="text-2xl">Navigation</p>
            <p className="text-lg">Home</p>
            <p className="text-lg">Features</p>
            <p className="text-lg">About</p>
            <p className="text-lg">Collection</p>
          </div>
          <div className="w-full flex flex-col gap-3 text-white">
            <p className="text-2xl">Support Us</p>
            <p className="text-lg">Contact Us</p>
            <p className="text-lg">Support Center</p>
            <p className="text-lg">Security</p>
          </div>
          <div className="w-full flex flex-col gap-3 text-white">
            <p className="text-2xl">Partner</p>
            <p className="text-lg">Our Partner</p>
            <p className="text-lg">Community</p>
            <p className="text-lg">Costumers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
