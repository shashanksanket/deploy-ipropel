'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { name: 'Overview', url: '' },
  { name: 'Features', url: '' },
  { name: 'Solutions', url: '' },
  { name: 'Tutorials', url: '' },
  { name: 'Pricing', url: '' },
  { name: 'Releases', url: '' },
];

const useCases = [
  { name: 'Startups', url: '' },
  { name: 'Enterprise', url: '' },
  { name: 'Government', url: '' },
  { name: 'SaaS', url: '' },
  { name: 'Marketplaces', url: '' },
  { name: 'Ecommerce', url: '' },
];
const resources = [
  { name: 'Blog', url: '' },
  { name: 'Newsletter', url: '' },
  { name: 'Events', url: '' },
  { name: 'Help centre', url: '' },
  { name: 'Tutorials', url: '' },
  { name: 'Support', url: '' },
];
const companies = [
  { name: 'About Us', url: '' },
  { name: 'Careers', url: '' },
  { name: 'Press', url: '' },
  { name: 'News', url: '' },
  { name: 'Media kit', url: '' },
  { name: 'Contact', url: '' },
];

const socialMedias = [
  { url: 'https://facebook.com', name: 'Facebook' },
  { url: 'https://gitlab.com', name: 'Gitlab' },
  { url: 'https://github.com', name: 'Github' },
  { url: 'https://telegram.com', name: 'Telegram' },
  { url: 'https://instagram.com', name: 'Instagram' },
  { url: 'https://figma.com', name: 'Figma' },
];

const legal = [
  { name: 'Terms', url: '' },
  { name: 'Privacy', url: '' },
  { name: 'Cookies', url: '' },
  { name: 'Licenses', url: '' },
  { name: 'Settings', url: '' },
  { name: 'Contact', url: '' },
];

const footerContents = [
  {
    title: 'Product',
    links: products,
  },
  {
    title: 'Company',
    links: useCases,
  },
  {
    title: 'Resources',
    links: resources,
  },
  {
    title: 'Use Cases',
    links: companies,
  },
  {
    title: 'Social',
    links: socialMedias,
  },
  {
    title: 'Legal',
    links: legal,
  },
];

function Footer(): JSX.Element {
  const [sectionVisibility, setSectionVisibility] = useState({});

  const toggleSection = (title: string): void => {
    setSectionVisibility((prevVisibility) => ({
      ...prevVisibility,
      [title]: !prevVisibility[title],
    }));
  };
  // function handleKeyPress(
  //   title: string,
  //   e: React.KeyboardEvent<HTMLButtonElement>
  // ): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <footer className="bg-white text-gray-400 w-full pt-16">
      <div className="hidden md:grid sm:grid-cols-2 px-28 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        {footerContents.map(({ title, links }) => (
          <div key={title}>
            <h4 className="text-sm font-bold mb-4">{title}</h4>
            <ul>
              {links.map(({ name, url }) => (
                <li className="py-1.5" key={name}>
                  <Link href={url}>
                    <p className="text-gray-500 text-base font-semibold hover:text-black">
                      {name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="md:hidden px-10">
        {footerContents.map(({ title, links }) => (
          <div key={title}>
            <button
              className="flex justify-between w-full my-1 text-sm font-bold cursor-pointer focus:outline-none"
              onClick={() => {
                toggleSection(title);
              }}
              type="button"
            >
              {title}
              <Image
                alt=""
                className="ml-2"
                height={16}
                src="/assets/images/chevron-down.png"
                width={16}
              />
            </button>
            <ul
              className={`transition-all ${
                sectionVisibility[title]
                  ? 'max-h-96'
                  : 'max-h-0 overflow-hidden'
              }`}
            >
              {links.map(({ name, url }) => (
                <li className="py-1.5" key={name}>
                  <Link href={url}>
                    <p className="text-gray-500 pl-2 text-sm font-semibold hover:text-black">
                      {name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="my-8" />
      <div className="w-full grid grid-cols-2 px-4 md:px-28">
        <p className="text-black">Ultimate UI</p>
        <p className="text-right">© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
