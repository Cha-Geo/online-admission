'use client'
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { IconArrowLeftNew, IconArrowRightNew } from "./icons";

interface IProps {
  data: IProgram[];
  autoIncrement?: boolean;
  interval?: number;
}

const Carousel: React.FC<IProps> = ({
  data,
  autoIncrement,
  interval = 5000,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize the carousel script here
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    // Custom carousel logic (you can replace this with your preferred library)
    const items = carousel.querySelectorAll("[data-carousel-item]");

    const showSlide = (index: number) => {
      items.forEach((item, i) => {
        item.classList.toggle("hidden", i !== index);
      });
    };

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
      showSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      setCurrentIndex(prevIndex);
      showSlide(prevIndex);
    };

    showSlide(currentIndex);

    // Add event listeners to control the carousel
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");

    const handlePrevClick = () => prevSlide();
    const handleNextClick = () => nextSlide();

    prevButton?.addEventListener("click", handlePrevClick);
    nextButton?.addEventListener("click", handleNextClick);

    // Clean up event listeners when the component unmounts
    return () => {
      prevButton?.removeEventListener("click", handlePrevClick);
      nextButton?.removeEventListener("click", handleNextClick);
    };
  }, [currentIndex, data, interval]);

  useEffect(() => {
    if (autoIncrement) {
      // Auto-increment logic
      const autoInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, interval);

      // Clean up the interval when the component unmounts
      return () => clearInterval(autoInterval);
    }
  }, [autoIncrement, data, interval]);

  return (
    <div className="max-w-2xl mx-auto">
      <div
        ref={carouselRef}
        id="default-carousel"
        className="relative"
        data-carousel="static"
      >
        {/* Carousel items */}
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {Array.isArray(data) && data?.map((item, index) => (
            <div
              key={item.id}
              className={`hidden duration-700 ease-in-out ${
                index === currentIndex ? "" : "hidden"
              }`}
              data-carousel-item
            >
              <Image
                src={
                  item.images && item.images[0].driveid
                    ? `http://localhost:7700/api/programmes/drive/files/${item.images[0].driveid}/view`
                    : "/assets/images/1697289858449-901907640-Screenshot (7).png"
                }
                alt={
                  item.images
                    ? item.images[0].filename.slice(23)
                    : item.name.slice(0, 10)
                }
                width={400}
                height={150}
                className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        {!autoIncrement && (
          <div className="flex justify-between z-30">
            {/* Indicator buttons */}
            <IconArrowLeftNew
              className="prev-button top-1/2 absolute left-3"
              data-carousel-prev
            />
            <IconArrowRightNew
              className="next-button top-1/2 absolute right-5"
              data-carousel-next
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
