'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NotificationDropdown from "@/components/dropdowns/NotificationDropdown";
import UserDropdown from "@/components/dropdowns/UserDropdown";
import { rootConstants } from "@/constants/main";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const pathname = usePathname();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-[18.5rem] z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>
          {/* Brand */}
          <Link href="/admin/dashboard">
            <Link
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              {rootConstants.BRAND_NAME} Dashboard
            </Link>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/admin/dashboard">
                    <Link
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      {rootConstants.BRAND_NAME} Dashboard
                    </Link>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form> */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Accommodation Details
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Overview
                  </Link>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/reservation">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/reservation") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-sm " +
                        (pathname.indexOf("/admin/reservation") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Reservations
                  </Link>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/accommodation">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/accommodation") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (pathname.indexOf("/admin/accommodation") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Accommodations
                  </Link>
                </Link>
              </li>
              {/* <li className="items-center">
                <Link href="/admin/student">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/student") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (pathname.indexOf("/admin/student") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
               Students
                  </Link>
                </Link>
              </li> */}
              <li className="items-center">
                <Link href="/admin/private-accommodation">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf(
                        "/admin/private-accommodation"
                      ) !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (pathname.indexOf(
                          "/admin/private-accommodation"
                        ) !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Private Accommodation
                  </Link>
                </Link>
              </li>
              {/* <li className="items-center">
                <Link href="/admin/hostel/hostelImage">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/hostel/hostelImage") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (pathname.indexOf("/admin/hostel/hostelImage") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Hostel Images
                  </Link>
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Room Information
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/roomType">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/roomType") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (pathname.indexOf("/admin/roomType") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Room Types
                  </Link>
                </Link>
              </li>
              {/* <li className="items-center">
                <Link href="/admin/roomType/roomTypeImage">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/roomType/roomTypeImage") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (pathname.indexOf("/admin/roomType/roomTypeImage") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Room Types Images
                  </Link>
                </Link>
              </li> */}

              <li className="items-center">
                <Link href="/admin/rooms">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/rooms") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-home mr-2 text-sm " +
                        (pathname.indexOf("/admin/rooms") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Rooms
                  </Link>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-1 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Users Information
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/users/managers">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/users/managers") !== -1
                        ? "text-green-500 hover:text-green-600"
                        : "text-green-900 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user mr-2 text-sm " +
                        (pathname.indexOf("/admin/users/managers") !== -1
                          ? "opacity-75"
                          : "text-green-500")
                      }
                    ></i>{" "}
                    Manager
                  </Link>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/users/tenants">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/users/tenants") !== -1
                        ? "text-green-500 hover:text-green-600"
                        : "text-green-900 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user  mr-2 text-sm " +
                        (pathname.indexOf("/admin/users/tenants") !== -1
                          ? "opacity-75"
                          : "text-green-500")
                      }
                    ></i>{" "}
                    Tenants
                  </Link>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/users/admins">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/users/admins") !== -1
                        ? "text-green-500 hover:text-green-600"
                        : "text-green-900 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user  mr-2 text-sm " +
                        (pathname.indexOf("/admin/users/admins") !== -1
                          ? "opacity-75"
                          : "text-green-500")
                      }
                    ></i>{" "}
                    Admins
                  </Link>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/admin/users/unverified">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/admin/users/unverified") !== -1
                        ? "text-red-500 hover:text-red-600"
                        : "text-red-700 hover:text-red-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-user  mr-2 text-sm " +
                        (pathname.indexOf("/admin/users/unverified") !==
                        -1
                          ? "opacity-75"
                          : "text-red-500")
                      }
                    ></i>{" "}
                    Unverified users
                  </Link>
                </Link>
              </li>
            </ul>

            <hr className="my-1 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Payment Information
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/paymentInformation/income">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf(
                        "/admin/paymentInformation/income"
                      ) !== -1
                        ? "text-green-500 hover:text-green-600"
                        : "text-green-900 hover:text-green-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-arrow-up mr-2 text-sm " +
                        (pathname.indexOf(
                          "/admin/paymentInformation/income"
                        ) !== -1
                          ? "opacity-75"
                          : "text-green-500")
                      }
                    ></i>{" "}
                    Income
                  </Link>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/paymentInformation/withdrawal">
                  <Link
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf(
                        "/admin/paymentInformation/withdrawal"
                      ) !== -1
                        ? "text-red-500 hover:text-red-600"
                        : "text-red-700 hover:text-red-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-arrow-down  mr-2 text-sm " +
                        (pathname.indexOf(
                          "/admin/paymentInformation/withdrawal"
                        ) !== -1
                          ? "opacity-75"
                          : "text-red-500")
                      }
                    ></i>{" "}
                    Withdrawal
                  </Link>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
