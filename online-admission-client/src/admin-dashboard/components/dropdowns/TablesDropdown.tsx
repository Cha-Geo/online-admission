'use client'
import React, { useState, useRef } from "react";
import { createPopper, Instance } from "@popperjs/core";
import Link from 'next/link';

const TablesDropdown: React.FC = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] =
    useState<boolean>(false);
  const btnDropdownRef = useRef<HTMLAnchorElement | null>(null);
  const popoverDropdownRef = useRef<HTMLDivElement | null>(null);

  let popperInstance: Instance | null = null;

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      popperInstance = createPopper(
        btnDropdownRef.current,
        popoverDropdownRef.current,
        {
          placement: "left-start",
        }
      );
    }
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    if (popperInstance) {
      popperInstance.destroy();
    }
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <Link
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </Link>
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </Link>
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </Link>
      </div>
    </>
  );
};

export default TablesDropdown;
