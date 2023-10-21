import Image from "next/image";
import Link from "next/link";

const Test = () => {
  return (
    <Link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      rel="stylesheet"
    >
      <div className="bg-gray-200 p-10 flex flex-wrap sys-app-notCollapsed ">
        <div className="p-4 w-full ">
          <div className="w-1/3 py-4 px-6 flex mx-auto ">
            <span className="px-2 mx-2 inline-block capitalize font-medium ">
              <span className="block text-xl mt-3">Built by</span>
            </span>
            <Image
              src="/assets/images/logo.svg"
              width={40}
              height={40}
              alt="alt placeholder"
              className="w-12 h-12 mt-1 rounded-full inline-block"
            >
              <span className="px-2 mx-2 inline-block capitalize font-medium">
                <span className="block text-xl">Hamza Nouali</span>
                <span className="block font-normal text-gray-700">
                  Web Developer
                </span>
              </span>
            </Image>
          </div>
          <div className="p-4 text-center">
            <Link
              href="https://twitter.com/AppClsname"
              target="_tab"
              className="p-2 mx-2 "
            >
              <i className="fab fa-twitter inline-block w-5"></i>
              <span className="mx-2 ">@ClsnameApp</span>
            </Link>
            <Link
              href="https://twitter.com/HamzaNouali3"
              target="_tab"
              className="p-2 mx-2 "
            >
              <i className="fab fa-twitter inline-block w-5"></i>
              <span className="mx-2 ">@hamzanouali</span>
            </Link>
            <span className="p-2 mx-2 ">
              <i className="fas fa-envelope inline-block w-5"></i>
              <span className="mx-2 ">hamza.nouali.business@gmail.com</span>
            </span>
            <Link
              href="https://www.Linkedin.com/in/hamza-nouali-8786ab19a/"
              target="_tab"
              className="p-2 mx-2 "
            >
              <i className="fab fa-Linkedin inline-block w-5"></i>
              <span className="mx-2 ">hamza nouali</span>
            </Link>
          </div>
          <p className="p-4 text-center w-3/5 mx-auto">
            These are HTML & CSS components built using Tailwind CSS framework,
            you can download it (100% Free and well documented) to learn from it
            or even re-use it.
          </p>
        </div>
        {/* horizontal navigations */}
        <div className="p-4 pb-0 mx-auto flex flex-wrap ">
          <div className="p-4 w-full lg:w-1/2 bg-gray-800">
            {/* dark mode - without text - icons only*/}
            <div className="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg ">
              <span className="px-2 mr-2 border-r border-gray-800">
                <Image
                  width={40}
                  height={40}
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                  alt="alt placeholder"
                  className="w-8 h-8 -mt-1 inline mx-auto"
                ></Image>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="fas fa-stream p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="fas fa-search p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="fas fa-th p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer w-8 relative">
                <i className="fas fa-bell p-2 bg-gray-800 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <span className="hover:text-white cursor-pointer w-10 relative float-right mr-3">
                <i className="fas fa-user p-2 bg-gray-800 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </div>
          </div>
          <div className="p-4 w-full lg:w-1/2">
            {/* dark mode - without text - icons only */}
            <div className="p-2 text-gray-900 bg-white rounded-lg shadow-lg ">
              <span className="px-2 mr-2 border-r border-gray-800">
                <Image
                  width={40}
                  height={40}
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                  alt="alt placeholder"
                  className="w-8 h-8 -mt-1 inline mx-auto"
                ></Image>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="fas fa-stream p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="fas fa-search p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="fas fa-th p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="w-8 fas fa-calendar-alt p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700">
                <i className="fas fa-bell p-2 bg-gray-200 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <span className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
                <i className="fas fa-user p-2 bg-gray-200 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </div>
          </div>
          <div className="p-4 w-full lg:w-1/2 bg-gray-800">
            {/* dark mode - text and icons */}
            <div className="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
              <span className="px-2 mr-2 border-r border-gray-800">
                <Image
                  width={40}
                  height={40}
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                  alt="alt placeholder"
                  className="w-8 h-8 -mt-1 inline mx-auto"
                ></Image>
              </span>
              <span className="px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded mb-5">
                <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full"></i>
                <span className="mx-1">categories</span>
              </span>
              <span className="px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded mb-5">
                <i className="w-8 fas fa-th p-2 bg-gray-800 rounded-full"></i>
                <span className="mx-1">menu</span>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="fas fa-search p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer">
                <i className="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"></i>
              </span>
              <span className="px-1 hover:text-white cursor-pointer w-8 relative">
                <i className="w-8 fas fa-bell p-2 bg-gray-800 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <span className="hover:text-white cursor-pointer w-10 relative float-right mr-3">
                <i className="fas fa-user p-2 bg-gray-800 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </div>
          </div>
          <div className="p-4 w-full lg:w-1/2">
            {/* light mode - text and icons */}
            <div className="p-2 text-gray-900 bg-white rounded-lg shadow-lg font-medium capitalize">
              <span className="px-2 mr-2 border-r border-gray-800">
                <Image
                  width={40}
                  height={40}
                  src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                  alt="alt placeholder"
                  className="w-8 h-8 -mt-1 inline mx-auto"
                ></Image>
              </span>
              <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
                <i className="w-8 fas fa-stream p-2 bg-gray-200 rounded-full"></i>
                <span className="mx-1">categories</span>
              </span>
              <span className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-gray-700 text-sm rounded mb-5">
                <i className="w-8 fas fa-th p-2 bg-gray-200 rounded-full"></i>
                <span className="mx-1">menu</span>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="fas fa-search p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 cursor-pointer hover:text-gray-700">
                <i className="w-8 fas fa-calendar-alt p-2 bg-gray-200 rounded-full"></i>
              </span>
              <span className="px-1 w-8 relative cursor-pointer hover:text-gray-700">
                <i className="w-8 fas fa-bell p-2 bg-gray-200 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full">
                  3
                </span>
              </span>
              <span className="w-10 relative float-right mr-3 cursor-pointer hover:text-gray-700">
                <i className="w-8 fas fa-user p-2 bg-gray-200 rounded-full"></i>
                <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                  3
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* vertical navigations */}
        <div className="p-4 pt-0 mx-auto flex flex-wrap ">
          {/* dark mode - tight side navigation with yellow notification */}
          <div className="p-4 w-24 bg-gray-800">
            <div className="py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-center shadow-lg">
              <Image
                width={40}
                height={40}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5"
              >
                <span className="cursor-pointer hover:text-white px-2 block mb-5">
                  <i className="fas fa-stream"></i>
                </span>
                <span className="cursor-pointer hover:text-white px-2 block mb-5">
                  <i className="fas fa-search p-2 bg-gray-800 rounded-full"></i>
                </span>
                <span className="cursor-pointer hover:text-white px-2 block mb-5 relative">
                  <i className="fas fa-users"></i>
                  <span className="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 shadow-lg rounded-full border-2 border-gray-900">
                    3
                  </span>
                </span>
                <span className="cursor-pointer hover:text-white px-2 block mb-5">
                  <i className="fas fa-calendar-alt"></i>
                </span>
              </Image>
            </div>
          </div>
          <div className="p-4 w-24 bg-gray-800">
            {/* dark mode - tight side navigation with red notification */}
            <div className="py-4 px-2 text-gray-700 bg-gray-900 rounded text-center shadow-lg">
              <Image
                width={40}
                height={40}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5"
              >
                <span className="cursor-pointer hover:text-white px-2 block mb-5">
                  <i className="fas fa-stream"></i>
                </span>
                <span className="cursor-pointer hover:text-white px-2 block mb-5">
                  <i className="fas fa-search p-2 bg-gray-800 rounded-full"></i>
                </span>
                <span className="cursor-pointer hover:text-white px-2 block mb-5 relative">
                  <i className="fas fa-bell"></i>
                  <span className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-gray-900">
                    3
                  </span>
                </span>
                <span className="cursor-pointer px-2 block mb-5 relative">
                  <span className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-gray-900">
                    3
                  </span>
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/logo.svg"
                    alt="alt placeholder"
                    className="w-8 h-8 mx-auto mb-5 rounded-full"
                  ></Image>
                </span>
              </Image>
            </div>
          </div>
          <div className="p-4 w-64 bg-gray-800">
            {/* dark mode - wide side navigation */}
            <div className="w-full py-4 px-2 text-gray-700 bg-gray-900 rounded-lg text-left capitalize font-medium shadow-lg">
              <Image
                width={20}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5 "
              >
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                  <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full"></i>
                  <span className="mx-2">categories</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                  <i className="w-8 fas fa-search p-2 bg-gray-800 rounded-full"></i>
                  <span className="mx-2">search</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                  <span className="w-8 mb-5 relative">
                    <i className="w-8 fas fa-user p-2 bg-gray-800 rounded-full"></i>
                    <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                      3
                    </span>
                  </span>
                  <span className="mx-2">sign ups</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                  <i className="w-8 fas fa-th p-2 bg-gray-800 rounded-full"></i>
                  <span className="mx-2">menu</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-800 hover:text-gray-300 rounded block mb-5">
                  <i className="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full"></i>
                  <span className="mx-2">calendar</span>
                </span>
              </Image>
            </div>
          </div>
          <div className="p-4 w-64 ">
            {/* light mode - wide side navigation */}
            <div className="w-full py-4 px-2 text-gray-900 bg-white rounded-lg text-left capitalize font-medium shadow-lg">
              <Image
                width={20}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5 "
              >
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
                  <i className="w-8 fas fa-stream p-2 bg-gray-200 rounded-full"></i>
                  <span className="mx-2">categories</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
                  <i className="w-8 fas fa-search p-2 bg-gray-200 rounded-full"></i>
                  <span className="mx-2">search</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
                  <span className="w-8 mb-5 relative">
                    <i className="w-8 fas fa-user p-2 bg-gray-200 rounded-full"></i>
                    <span className="absolute right-0 top-0 -mt-2 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                      3
                    </span>
                  </span>
                  <span className="mx-2">sign ups</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
                  <i className="w-8 fas fa-th p-2 bg-gray-200 rounded-full"></i>
                  <span className="mx-2">menu</span>
                </span>
                <span className="cursor-pointer px-2 py-1 hover:bg-gray-200 hover:text-gray-700 rounded block mb-5">
                  <i className="w-8 fas fa-calendar-alt p-2 bg-gray-200 rounded-full"></i>
                  <span className="mx-2">calendar</span>
                </span>
              </Image>
            </div>
          </div>
          <div className="p-4 w-24 ">
            {/* light mode - tight side navigation with red notification */}
            <div className="py-4 px-2 text-gray-900 bg-white rounded text-center shadow-lg ">
              <Image
                width={20}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5"
              >
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5">
                  <i className="fas fa-stream"></i>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5">
                  <i className="fas fa-search p-2 bg-gray-200 rounded-full"></i>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
                  <i className="fas fa-bell"></i>
                  <span className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white">
                    3
                  </span>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/images/logo.svg"
                    alt="alt placeholder"
                    className="w-8 h-8 mx-auto mb-5 rounded-full"
                  >
                    <span className="absolute right-0 top-0 -mt-2 text-xs bg-red-500 text-white font-medium px-2 shadow-lg rounded-full border-2 border-white ">
                      3
                    </span>
                  </Image>
                </span>
              </Image>
            </div>
          </div>
          <div className="p-4 w-24 ">
            {/* light mode - tight side navigation with yellow notification */}
            <div className="py-4 px-2 bg-white text-gray-900 rounded-lg text-center shadow-lg">
              <Image
                width={20}
                src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
                alt="alt placeholder"
                className="w-8 h-8 mx-auto mb-5"
              >
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5">
                  <i className="fas fa-stream"></i>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5">
                  <i className="fas fa-search p-2 bg-gray-200 rounded-full"></i>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5 relative">
                  <i className="fas fa-users"></i>
                  <span className="absolute right-0 top-0 -mt-2 text-xs bg-yellow-500 text-black font-medium px-2 shadow-lg rounded-full border-2 border-white">
                    3
                  </span>
                </span>
                <span className="cursor-pointer hover:text-gray-500 px-2 block mb-5">
                  <i className="fas fa-calendar-alt"></i>
                </span>
              </Image>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Test;
