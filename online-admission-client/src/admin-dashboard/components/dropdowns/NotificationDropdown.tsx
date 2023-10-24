'use client'
import React, { useState, useRef } from "react";
import { createPopper, Instance } from "@popperjs/core";
import Link from 'next/link';

const NotificationDropdown: React.FC = () => {
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
          placement: "bottom-start",
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
        className="text-blueGray-500 block py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-bell"></i>
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
          Profile
        </Link>
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Change Password
        </Link>
        {/* <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </Link> */}
        <div className="h-0 my-2 border border-solid border-blueGray-100 bg-red-500" />
        <Link
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </Link>
      </div>
    </>
  );
};

export default NotificationDropdown;
