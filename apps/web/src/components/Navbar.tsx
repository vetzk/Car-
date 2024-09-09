'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';
import DropdownMenu from './DropdownMenu';

interface INavbarProps {}

type MenuKey = 'models' | 'shoppingTools' | 'inventory'; //union type

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [hoveredItem, setHoveredItem] = React.useState<MenuKey | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const handleRouteLogin = () => {
    router.replace('/login');
  };
  const handleRouteRegister = () => {
    router.replace('/register');
  };

  /**
   * The Record utility type in TypeScript is used to construct an object type whose property keys are K and whose property values are T.
   * It's a convenient way to define an object type with a fixed set of keys and their associated types.
   * Record<K, T>
   * K is the type of the keys in the object. It can be a string, number, or union type (e.g., 'a' | 'b' | 'c').
   * T is the type of the values associated with each key.
   */

  const menuItems: Record<
    MenuKey,
    { label: string; href: string; imagesrc?: string }[]
  > = {
    models: [
      { label: 'Model S', href: '/models', imagesrc: '/model.png' },
      { label: 'Model X', href: '/models/x', imagesrc: '/model2.png' },
      { label: 'Model X', href: '/models/x', imagesrc: '/model3.png' },
      { label: 'Model X', href: '/models/x', imagesrc: '/model.png' },
      { label: 'Model X', href: '/models/x', imagesrc: '/model5.png' },
      { label: 'Model X', href: '/models/x', imagesrc: '/model6.png' },
    ],
    shoppingTools: [
      { label: 'Build & Price', href: '/tools/build' },
      { label: 'Financing', href: '/tools/finance' },
    ],
    inventory: [
      { label: 'New Inventory', href: '/inventory/new' },
      { label: 'Used Inventory', href: '/inventory/used' },
    ],
  };

  return (
    <div className="relative">
      {hoveredItem && <div className="fixed inset-0 bg-black/50 z-40"></div>}
      <div className="flex justify-between items-center fixed top-0 left-0 right-0 w-auto m-4 p-4 bg-transparent shadow-lg rounded-lg backdrop-blur-md z-50">
        <Image
          src="/tesla.png"
          alt="tesla"
          width={500}
          height={500}
          onClick={() => router.replace('/')}
          className="w-12 h-12 cursor-pointer"
        />
        <div className="flex gap-14 relative">
          {(['models', 'shoppingTools', 'inventory'] as MenuKey[]).map(
            (item) => (
              <div
                key={item}
                onClick={() => item === 'models' && router.push('/models')}
                className="relative"
                onMouseEnter={() => setHoveredItem(item as MenuKey)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <p
                  className={`cursor-pointer ${
                    pathname === '/login' ||
                    pathname === '/register' ||
                    pathname === '/'
                      ? 'text-white'
                      : 'text-black'
                  }`}
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace(/([A-Z])/g, ' $1')}
                </p>
                {hoveredItem === item && (
                  <div
                    className="absolute top-full left-0 w-full min-h-[70vh] z-50 flex flex-col transition-transform duration-1000 ease-in-out"
                    onMouseEnter={() => setHoveredItem(item as MenuKey)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <DropdownMenu
                      contentType={item === 'models' ? 'image' : 'text'}
                      items={menuItems[item as MenuKey]}
                    />
                  </div>
                )}
              </div>
            ),
          )}
          {['Service', 'About', 'Contact'].map((item, index) => (
            <p
              key={index}
              onClick={() => item === 'About' && router.push('/about')}
              className={`cursor-pointer ${
                pathname === '/' ? 'text-white' : 'text-black'
              }`}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex gap-5">
          <Button onClick={handleRouteLogin}>Login</Button>
          <Button onClick={handleRouteRegister}>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
