"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { IconAllignLeftMenu, IconArrowDown, IconArrowUp, IconClose } from "../icons";
import Link from 'next/link';
import * as navLinks from '@/public/data/navigationLinks';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState("");

  const handleDropdown = (itemName: string) => {
    setOpenDropdown((prevItem) => (prevItem === itemName ? "" : itemName));
  };

  const { navigationItems, aboutData } = navLinks;
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={20}
              height={20}
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <IconAllignLeftMenu
            className="-m-2.5 w-12 font-bold p-2.5 text-gray-700 cursor-pointer hover:shadow-sm rounded-full"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between font-semibold">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  width={20}
                  height={20}
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 w-10 p-2.5 text-gray-700 text-lg hover:shadow-sm shadow-slate-600 rounded-full"
              >
                <IconClose onClick={() => setMobileMenuOpen(false)} />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div>
                  <div className="space-y-2 py-6  text-2xl ">
                    {navigationItems.map((item, i) => (
                      <div
                        key={item.name}
                        className="transition-all duration-500"
                      >
                        <div className="flex items-center justify-between text-2xl py-2 px-5 -mx-3  transition-all duration-500 font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg">
                          <Link
                            key={item.name}
                            href={item.path}
                            className=" py-2 text-base flex items-center justify-start  gap-5"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="icon">
                              <item.icon />
                            </div>
                            <div className="name">{item.name}</div>
                          </Link>
                          {item.data && ( // Updated condition to check isOpen
                            <div className="flex items-center">
                              {openDropdown === item.name ? (
                                <IconArrowUp
                                  onClick={() => handleDropdown(item.name)}
                                  className="cursor-pointer"
                                />
                              ) : (
                                <IconArrowDown
                                  onClick={() => handleDropdown(item.name)}
                                  className="cursor-pointer"
                                />
                              )}
                            </div>
                          )}
                        </div>
                        {openDropdown === item.name && item.data && (
                          <div className="items-center py-2 px-5   transition-all duration-500 font-semibold ">
                            {item.data.map((data, j) => (
                              <Link
                                key={j}
                                className="pl-14 py-2 -mx-3 flex items-center gap-5 text-gray-900 hover:bg-gray-50 leading-7 rounded-lg  text-base"
                                href={data.path}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="icon">
                                  <data.icon />
                                </div>
                                <div className="block">{data.name}</div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar