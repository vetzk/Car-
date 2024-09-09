'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import apiCar, { createCarImage } from '@/utils/CarApi';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import * as React from 'react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdEventSeat,
} from 'react-icons/md';
import { GiSettingsKnobs } from 'react-icons/gi';
import { FaStar, FaRegHeart, FaCar, FaTachometerAlt } from 'react-icons/fa';
interface ICarDetailProps {}

const CarDetail: React.FunctionComponent<ICarDetailProps> = (props) => {
  const [car, setCar] = React.useState<any[]>([]);
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['car-details'],
  //   queryFn: async () => {
  //     const { data }: any = await apiCar.get('/v1/cars?limit=1&model=corolla', {
  //       headers: {
  //         'X-Api-Key': 'fvFT2m0SPzv/X8ZtRgaLBw==PLfFuqLsdEL00lpO',
  //       },
  //     });
  //     console.log(data[0]);
  //     setCar(data[0]);

  //     return data[0];
  //   },
  // });

  return (
    <div className="w-full py-28 px-10 flex gap-10">
      <div className="w-1/4 h-[80vh] flex flex-col rounded-xl shadow-xl shadow-red-700 p-5 gap-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent no-scrollbar-arrows">
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between">
            <p>Filter by:</p>
            <p className="text-gray-400">Reset all &#10006;</p>
          </div>
          <div className="w-full">
            <Input
              type="text"
              placeholder="&#128269; Search"
              className="bg-slate-200"
            />
          </div>
        </div>
        <div className="w-full block border border-solid border-gray-300 bg-gray-300"></div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex gap-2">
              <p>Car Brand </p>
              <p className="w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center">
                2
              </p>
            </div>
            <MdKeyboardArrowUp size={20} />
          </div>
        </div>
        <div className="w-full block border border-solid border-gray-300 bg-gray-300"></div>{' '}
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex gap-2">
              <p>Car Model & Year</p>
              <p className="w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center">
                2
              </p>
            </div>
            <MdKeyboardArrowUp size={20} />
          </div>
        </div>
        <div className="w-full block border border-solid border-gray-300 bg-gray-300"></div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex gap-2">
              <p>Body Style</p>
              <p className="hidden w-6 h-6 rounded-full bg-red-400 text-white justify-center items-center">
                2
              </p>
            </div>
            <MdKeyboardArrowDown size={20} />
          </div>
          <div className="w-full flex">
            <div className="w-full flex-col flex gap-2">
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Sedan</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Hatchback</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Couple</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Pickup</p>
              </div>
            </div>
            <div className="w-full flex-col flex gap-2">
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Wagon</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Coupe</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Van</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Crossover</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full block border border-solid border-gray-300 bg-gray-300"></div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex gap-2">
              <p>Transmission</p>
              <p className="hidden w-6 h-6 rounded-full bg-red-400 text-white justify-center items-center">
                2
              </p>
            </div>
            <MdKeyboardArrowDown size={20} />
          </div>
          <div className="w-full flex">
            <div className="w-full flex-col flex gap-2">
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <div className="w-full flex items-center gap-2">
                  <p>Any</p>
                  <p className="text-gray-400">2,103</p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <div className="w-full flex items-center gap-2">
                  <p>Automatic</p>
                  <p className="text-gray-400">754</p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <div className="w-full flex items-center gap-2">
                  <p>Manual</p>
                  <p className="text-gray-400">1,337</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full block border border-solid border-gray-300 bg-gray-300"></div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex gap-2">
              <p>Fuel Type</p>
              <p className="hidden w-6 h-6 rounded-full bg-red-400 text-white justify-center items-center">
                2
              </p>
            </div>
            <MdKeyboardArrowDown size={20} />
          </div>
          <div className="w-full flex">
            <div className="w-full flex-col flex gap-2">
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Petrol</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Diesel</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>CNG</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Bio-Diesel</p>
              </div>
            </div>
            <div className="w-full flex-col flex gap-2">
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>LPG</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Ethanol</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Methanol</p>
              </div>
              <div className="w-full flex items-center gap-2">
                <Checkbox />
                <p>Electric</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-2 gap-5">
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className="flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className="flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className="flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className="flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className="flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className="flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className=" flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className=" flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className=" flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className="flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className="flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg flex flex-col gap-2 p-3 items-center shadow-xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-1/3 flex gap-2 justify-center items-center rounded-xl border-solid border border-slate-300 p-1">
              <FaStar color="orange" size={20} />
              <p className="font-bold">4.7</p>
              <p className="text-gray-400">(109)</p>
            </div>
            <div>
              <FaRegHeart size={30} color="gray" />
            </div>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <Image src="/model.png" alt="car-product" width={300} height={0} />
          </div>
          <div className="w-full flex flex-col gap-2">
            <p className="text-xl text-slate-400">FORD FOCUS</p>
            <div className="flex justify-between items-center">
              <p className="text-xl">1.5 EcoBlue MT Titanium X</p>
              <p className="text-xl">$30000</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-300"></div>
          <div className="w-full flex justify-around items-center gap-5">
            <div className="flex items-center gap-1">
              <FaCar size={20} color="red" />
              <p>Hatchback</p>
            </div>
            <div className="flex items-center gap-1">
              <GiSettingsKnobs size={20} color="red" />
              <p>Manual</p>
            </div>
            <div className="flex items-center gap-1">
              <FaTachometerAlt size={20} color="red" />
              <p>Diesel</p>
            </div>
            <div className="flex items-center gap-1">
              <MdEventSeat size={20} color="red" />
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
