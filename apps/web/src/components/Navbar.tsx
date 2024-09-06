'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleRouteLogin = () => {
    router.replace('/login');
  };
  const handleRouteRegister = () => {
    router.replace('/register');
  };
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 w-auto m-4 p-4 bg-transparent shadow-lg rounded-lg backdrop-blur-md z-50">
      <Image
        src="/tesla.png"
        alt="tesla"
        width={500}
        height={500}
        onClick={() => router.replace('/')}
        className="w-12 h-12 cursor-pointer"
      />
      <div className="flex gap-14">
        <p
          className={
            pathname === '/login'
              ? 'text-white'
              : pathname === '/register'
                ? 'text-white'
                : pathname === '/'
                  ? 'text-white'
                  : 'text-black'
          }
        >
          Models
        </p>
        <p
          className={
            pathname === '/login'
              ? 'text-white'
              : pathname === '/register'
                ? 'text-white'
                : pathname === '/'
                  ? 'text-white'
                  : 'text-black'
          }
        >
          Shopping Tools
        </p>
        <p
          className={
            pathname === '/login'
              ? 'text-white'
              : pathname === '/register'
                ? 'text-white'
                : pathname === '/'
                  ? 'text-white'
                  : 'text-black'
          }
        >
          Inventory
        </p>
        <p className={pathname === '/' ? 'text-white' : 'text-black'}>
          Service
        </p>
        <p className={pathname === '/' ? 'text-white' : 'text-black'}>About</p>
        <p className={pathname === '/' ? 'text-white' : 'text-black'}>
          Contact
        </p>
      </div>
      <div className="flex gap-5">
        <Button onClick={handleRouteLogin}>Login</Button>
        <Button onClick={handleRouteRegister}>Register</Button>
      </div>
    </div>
  );
};

export default Navbar;
