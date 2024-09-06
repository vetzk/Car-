'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 min-h-[70vh] relative">
        <Image
          src="/pexels-albinberlin-919073.jpg"
          alt="car"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 flex flex-col items-center gap-20 p-10">
        <div className="w-full flex justify-center text-2xl">
          <p>Login Page</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-20">
          <div className="w-full flex flex-col justify-center text-center items-center gap-5">
            <p className="text-5xl">Welcome Back</p>
            <p className="text-xl">
              Enter your email and password to access your account
            </p>
            <p className="text-xl">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline">
                Register
              </Link>
            </p>
          </div>
          <div className="w-3/4 flex flex-col items-center gap-5">
            <div className="w-3/4">
              <Label htmlFor="">Email</Label>
              <Input
                type="text"
                placeholder="Enter your email"
                className="border bg-slate-300 mt-4 border-slate-200 border-solid rounded-xl p-6"
              />
            </div>
            <div className="w-3/4 relative">
              <Label htmlFor="">Password</Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="border bg-slate-300 mt-4 border-slate-200 border-solid rounded-xl p-6"
              />
              {showPassword ? (
                <FaEyeSlash
                  size={30}
                  onClick={handleShowPassword}
                  className="absolute right-3 bottom-2 cursor-pointer"
                />
              ) : (
                <FaEye
                  size={30}
                  onClick={handleShowPassword}
                  className="absolute right-3 bottom-2 cursor-pointer"
                />
              )}
            </div>
            <div className="flex w-3/4 items-center justify-between">
              <div className="flex gap-2 items-center">
                <Checkbox />
                <Label>Remember Me?</Label>
              </div>
              <div className="flex gap-2 items-center">
                <Label>Forgot Password</Label>
              </div>
            </div>
            <div className="w-3/4 mt-10 flex flex-col gap-5">
              <Button className="w-full p-6 rounded-xl">Sign In</Button>
              <Button className="w-full p-6 rounded-xl border-slate-200 border-solid border bg-transparent text-black">
                <FcGoogle size={20} className="mr-3" />
                Sign In with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
