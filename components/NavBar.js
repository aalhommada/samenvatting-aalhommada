/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";


export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <nav className='flex items-center flex-wrap bg-indigo-400 p-3 '>
        <Link href="/">
                    <a className="flex md:w-1/5 title-font font-medium
                    items-center md:justify-start mb-4 md:mb-0">
                        <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
                        <span className="ml-3 text-xl">Samenvatten</span>                        
                    </a>
                </Link>
        <button
          className=' inline-flex p-3 hover:bg-indigo-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/blog'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-amber-600 hover:text-white '>
              Boeken
              </a>
            </Link>
            
            <Link href='/about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-amber-600 hover:text-white'>
              Over ons
              </a>
            </Link>
           
          </div>
        </div>
      </nav>
      
    
    </>
  );
};