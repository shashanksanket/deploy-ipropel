'use client';
import React, { useState } from 'react';
import { Button } from '@repo/ui';
import Image from 'next/image';

/* eslint-disable -- random */

const headerLinks = [
  {
    title: 'Categories',
    links: [
      { name: 'Option 1', url: '#', hoverText: '22 Courses' },
      { name: 'Option 2', url: '#', hoverText: '25 Courses' },
      { name: 'Option 3', url: '#', hoverText: '24 Courses' },
      { name: 'Option 4', url: '#', hoverText: '21 Courses' },
      { name: 'Option 5', url: '#', hoverText: '29 Courses' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Option 1', url: '#' },
      { name: 'Option 1', url: '#' },
      { name: 'Option 1', url: '#' },
      { name: 'Option 1', url: '#' },
      { name: 'Option 1', url: '#' },
    ],
  },
  {
    title: 'Teach on iPropel',
    links: [],
  },
];

function Header(): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState<number | null>(
    null,
  );

  return (
    <nav className="bg-white text-black py-2 lg:px-16 xl:px-28 md:px-8">
      <div className="container flex">
        {/* Logo */}
        <div className="flex flex-initial items-center justify-center">
          <p className="text-base text-xl font-bold">iPropel</p>
        </div>

        {/* Dropdowns */}
        <div className="flex-wrap flex-1 flex justify-left pl-10">
          {headerLinks.map((link, index) => (
            <div
              className="relative group pr-5"
              key={link.title}
              onMouseEnter={() => {
                setIsDropdownVisible(index);
              }}
              onMouseLeave={() => {
                setIsDropdownVisible(null);
              }}
            >
              <button
                className="flex py-4 items-center justify-centertext-gray-500 group-hover:text-black font-semibold text-base px-3 py-1 rounded-md"
                type="button"
              >
                {link.title}
                {link.links.length !== 0 && (
                  <Image
                    alt="Chevrondown1"
                    className="mt-px w-5 ml-1"
                    height={14}
                    id="Chevrondown1"
                    src="https://file.rendit.io/n/AFPKkPAISTQSQ7WFlM3z.svg"
                    width={14}
                  />
                )}
              </button>
              {link.links.length !== 0 && (
                <div
                  className={`absolute min-w-[220px] ${
                    isDropdownVisible === index ? 'opacity-100' : 'opacity-0'
                  } group-hover:block bg-white z-50 transition-opacity duration-300 hidden border-2 border-gray-300 text-black rounded-md`}
                >
                  {/* Dropdown content */}
                  {link.links.map((option) => (
                    <a
                      className="flex pl-2 pr-2 group/link rounded-md hover:bg-gray-100 px-8 py-2 justify-between"
                      href={option.url}
                      key={option.name}
                    >
                      <p className="text-left text-sm">{option.name}</p>
                      <p className="text-right text-slate-400 text-sm hidden group-hover/link:block">
                        {option.hoverText}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login and Signup Buttons */}
        <div className="flex space-x-4 items-center justify-center">
          <Button variant="transparent">Login</Button>
          <Button size="base" variant="secondary">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
