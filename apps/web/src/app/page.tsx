'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Home() {
  const listImages = [
    {
      id: 1,
      src: '/pexels-maria-geller-801267-2127041.jpg',
      alt: 'car1',
    },
    {
      id: 2,
      src: '/pexels-maria-geller-801267-2127022.jpg',
      alt: 'car2',
    },
    {
      id: 3,
      src: '/pexels-mikebirdy-498703.jpg',
      alt: 'car3',
    },
    {
      id: 4,
      src: '/pexels-markusspiske-1729999.jpg',
      alt: 'car3',
    },
  ];

  const logoImages = [
    {
      src: '/honda.png',
      alt: 'honda',
    },
    {
      src: '/vw.png',
      alt: 'vw',
    },
    {
      src: '/aston.png',
      alt: 'aston',
    },
    {
      src: '/koenigsegg.png',
      alt: 'koenigsegg',
    },
    {
      src: '/tesla.png',
      alt: 'tesla',
    },
    {
      src: '/mini.png',
      alt: 'mini',
    },
  ];

  const listText = [
    {
      id: 1,
      title: 'Leave a lasting sheen on your point',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti reiciendis veniam consequuntur accusamus exercitationem delectus molestias, corporis tenetur omnis ipsam culpa est voluptates id nulla voluptatibus perferendis eius odio.',
    },
    {
      id: 2,
      title: 'Durability & Strength',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti reiciendis veniam consequuntur accusamus exercitationem delectus molestias, corporis tenetur omnis ipsam culpa est voluptates id nulla voluptatibus perferendis eius odio.',
    },
    {
      id: 3,
      title: 'No further paint protection required',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti reiciendis veniam consequuntur accusamus exercitationem delectus molestias, corporis tenetur omnis ipsam culpa est voluptates id nulla voluptatibus perferendis eius odio.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [currentTextIndex, setCurrentTextIndex] = useState<number | null>(1);

  return (
    <main className="flex w-full flex-col items-center bg-black">
      <div className="w-full flex items-center">
        <div className="w-1/4 min-h-[90vh] bg-slate-600 z-10 flex flex-col justify-end items-center">
          <div className="p-5 text-slate-300 text-sm">
            <p>
              From luxury to performance, find vehicles that redefine every
              journey. Discover the latest in automotive technology, design, and
              performance.
            </p>
          </div>
          <div className="absolute left-32 top-52">
            <p className="text-7xl text-white leading-relaxed font-bold">
              UNLEASHING <br /> THE POWER OF <br /> MOBILITY
            </p>
          </div>
        </div>
        <div className="w-3/4 min-h-[90vh] relative">
          <Image
            src={
              listImages.find((image) => image.id === currentIndex)?.src ||
              '/pexels-maria-geller-801267-2127022.jpg'
            }
            alt="car"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute flex flex-col gap-4 right-10 top-56">
            {listImages.map((val, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(val.id)}
                className={
                  currentIndex === val.id
                    ? `rounded-full cursor-pointer bg-white/20 items-center justify-center flex backdrop-blur-sm w-10 h-10`
                    : 'cursor-pointer items-center justify-center flex'
                }
              >
                <p className="text-white">0{val.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-around p-10">
        {logoImages.map((val, i) => (
          <React.Fragment key={i}>
            <Image src={val.src} alt={val.alt} width={75} height={75} />
          </React.Fragment>
        ))}
      </div>
      <div className="w-full flex p-10 gap-5 items-center">
        <div className="w-full">
          <p className="text-7xl text-white leading-normal font-bold">
            WE ARE THE LEADERS IN AUTOMOTIVE INDUSTRY
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 items-center">
          <div className="w-full">
            <p className="text-xl text-gray-400">
              A commitment to quality and service, bringing you the best in
              automotive choices. Find vehicles that offer unmatched
              performance, comfort, and reliability.
            </p>
          </div>
          <div className="w-full flex items-center gap-2 ">
            <p className="text-xl text-white">Learn More</p>
            <div>
              <FaExternalLinkAlt size={10} color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70vh] relative p-10">
        <Image
          src="/car-5861964.jpg"
          alt="supercar"
          layout="fill"
          objectFit="cover"
          className="p-10"
        />
      </div>
      <div className="w-full flex flex-col mt-10 p-10 gap-20">
        <div className="w-full flex-col flex justify-center text-center items-center gap-5 text-white">
          <p className="text-4xl font-bold">WE HAVE BEST FEATURES</p>
          <p className="text-xl text-gray-400">
            We are all about our clients comfort and safety. That&apos;s why we
            provide the best service you can imagine
          </p>
        </div>
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-10">
            <p className="text-4xl text-gray-400">O1</p>
            <p className="text-4xl text-gray-200">Quality Choice</p>
            <p className="text-lg text-gray-500">
              We provide several quality car options for you so you don&apos;t
              have to worry about the quality of your chosen car
            </p>
            <div className="w-full flex items-center gap-2 ">
              <p className="text-lg text-white">Learn More</p>
              <div>
                <FaExternalLinkAlt size={10} color="white" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <p className="text-4xl text-gray-400">O2</p>
            <p className="text-4xl text-gray-200">Exclusive Service For You</p>
            <p className="text-lg text-gray-500">
              We provide several quality car options for you so you don&apos;t
              have to worry about the quality of your chosen car
            </p>
            <div className="w-full flex items-center gap-2 ">
              <p className="text-lg text-white">Learn More</p>
              <div>
                <FaExternalLinkAlt size={10} color="white" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <p className="text-4xl text-gray-400">O3</p>
            <p className="text-4xl text-gray-200">Fast And Save Transaction</p>
            <p className="text-lg text-gray-500">
              We provide several quality car options for you so you don&apos;t
              have to worry about the quality of your chosen car
            </p>
            <div className="w-full flex items-center gap-2 ">
              <p className="text-lg text-white">Learn More</p>
              <div>
                <FaExternalLinkAlt size={10} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-10 p-10 gap-20">
        <div className="w-full flex-col flex justify-center text-center items-center gap-5 text-white">
          <p className="text-4xl font-bold">OUR COLLECTION CARS</p>
          <p className="text-xl text-gray-400">
            We are all about our clients comfort and safety. That&apos;s why we
            provide the best service you can imagine
          </p>
        </div>
        <div className="w-full flex justify-evenly p-10">
          <div className="w-full flex-col flex justify-center items-center gap-2">
            <p className="text-white">Popular</p>
            <div className="w-full h-0.5 bg-slate-200"></div>
          </div>
          <div className="w-full flex-col flex justify-center items-center gap-2">
            <p className="text-slate-500">Large Car</p>
            <div className="w-full h-0.5 bg-slate-700"></div>
          </div>
          <div className="w-full flex-col flex justify-center items-center gap-2">
            <p className="text-slate-500">Small Car</p>
            <div className="w-full h-0.5 bg-slate-700"></div>
          </div>
          <div className="w-full flex-col flex justify-center items-center gap-2">
            <p className="text-slate-500">Exclusive Car</p>
            <div className="w-full h-0.5 bg-slate-700"></div>
          </div>
        </div>
        <div className="w-full min-h-[150vh] grid grid-cols-3 gap-5 p-10">
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar1.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white"> Ferarri 812 GTS</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar2.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white">Aston Martin V12 Speedster</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar3.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white">Porsche 918 Spyder</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar4.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white">Ferrari SF90 Stradale</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar5.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white">Pininfarina Battista</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="bg-slate-700/20 flex-col flex w-full">
            <div className="w-full h-1/2 relative">
              <Image
                src="/supercar6.jpg"
                alt="supercar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full p-5 flex justify-between items-center">
              <p className="text-white text-3xl">$ 124.356,00</p>
              <p className="text-white text-xl">Jakarta</p>
            </div>
            <div className="w-full p-5">
              <p className="text-xl text-white">Hennessey Venom F5 Roadster</p>
            </div>
            <div className="w-full p-5">
              <Button className="w-full bg-white text-black text-lg p-3 rounded-none">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button className="p-5 text-lg text-black bg-white rounded-none shadow-xl">
            See All Cars
            <FaLongArrowAltRight className="ml-2" />
          </Button>
        </div>
        <div className="w-full flex justify-between p-10">
          <div className="w-full flex flex-col">
            <div className="w-full p-5">
              <p className="text-4xl text-white">
                Maybe your questions have been answered, check this out
              </p>
            </div>
            {listText.map((val, i) => (
              <div
                key={i}
                className="w-full flex flex-col item-center gap-5 p-5"
              >
                <div className="w-full flex justify-between items-center text-white">
                  <p className="text-xl">{val.title}</p>
                  <p
                    onClick={() =>
                      setCurrentTextIndex(
                        currentTextIndex === val.id ? null : val.id,
                      )
                    }
                    className="text-3xl"
                  >
                    {currentTextIndex === val.id ? '-' : '+'}
                  </p>
                </div>
                <div
                  className={`w-full ${currentTextIndex !== val.id && 'hidden'} text-gray-500`}
                >
                  <p>{val.desc}</p>
                </div>
                <div className="w-full h-[0.1rem] bg-slate-700"></div>
              </div>
            ))}
          </div>
          <div className="w-full relative">
            <Image
              src="/interior.jpg"
              alt="interior"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
