'use client';
import Image from 'next/image';
import * as React from 'react';

interface dropdownItems {
  href: string;
  label: string;
  imagesrc?: string;
}

interface IDropdownMenuProps {
  items: dropdownItems[];
  contentType: 'image' | 'text';
}

const DropdownMenu: React.FunctionComponent<IDropdownMenuProps> = ({
  items,
  contentType,
}) => {
  return (
    <div className="fixed top-full grid grid-cols-3 justify-center items-center left-0 w-full min-h-[70vh] bg-gray-700 bg-opacity-90 z-50 p-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full h-full flex justify-center items-center gap-4 hover:bg-gray-100 rounded transition duration-300 relative"
        >
          {contentType === 'image' ? (
            item.imagesrc && (
              <div className="flex flex-col w-full items-center justify-center">
                <Image
                  src={item.imagesrc}
                  alt={item.label}
                  width={300}
                  height={150}
                  className="object-cover rounded-md"
                />
              </div>
            )
          ) : (
            <span className="text-gray-800 text-lg">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
