'use client'

import { useEffect, useState } from "react";
import { Button } from "../button";
import Navbar from "./Navbar";
import { navbarImages } from "@/public/data/sectionData";

const CAROUREL_INTERVAL = 1.5;

const Hero2 = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % navbarImages.length
        );
      }, 5000 * CAROUREL_INTERVAL);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const divStyle = {
      backgroundImage: navbarImages[currentImageIndex],
    };
  return (
    <div className="relative bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <Navbar />
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={divStyle}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-60 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto xs:mt-8 lg:mt-12">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-[75%] px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-white font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  libero voluptatem harum quam! In laudantium doloribus,
                  eligendi rerum, assumenda eum nulla voluptates aperiam atque
                  reiciendis quae. Libero impedit ipsa, minima quae optio,
                  maxime odit sapiente officia nostrum dolorum doloremque ab
                  animi repellendus nobis id iure similique distinctio inventore
                  praesentium. Molestiae?
                </p>
              </div>
              <Button variant="outline" className="mt-10">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Awarded Agency</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas magni mollitia ipsam, itaque qui exercitationem
                    reiciendis nobis similique a ipsa?
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Free Revisions</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto laborum ea accusantium provident explicabo vel
                    veritatis eaque in, error quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Verified Company</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor repellat sunt molestiae illo! Cumque accusantium ex
                    harum. Laudantium, similique veniam!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative pt-8 pb-6 mt-1">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center"></div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Hero2;
