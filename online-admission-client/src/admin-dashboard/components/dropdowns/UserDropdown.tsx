'use client'
import React, { useState, useRef, MouseEvent } from "react";
import { createPopper, Instance } from "@popperjs/core";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const UserDropdown: React.FC = () => {
  const router = useRouter();

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

  const Logout = () => {
    localStorage.removeItem("user");
    return router.refresh();
  };

  return (
    <>
      <Link
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e: MouseEvent) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image
              width={300}
              height={350}
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href="/admin/account/profile">
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Profile
          </Link>
        </Link>
        <Link href="/admin/account/paymentInfo">
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Payment Info
          </Link>
        </Link>
        <Link href="/admin/account/changePassword">
          <Link
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Change Password
          </Link>
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100 bg-red-500" />
        <button
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-red-500 text-white"
          }
          type="button"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
