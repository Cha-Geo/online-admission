'use client'
import { useContext, useEffect } from "react";
import { IconAccordion } from "./icons";
import { OpenCloseContext } from "@/services/contexts/OpenCloseContext";
import { cn } from "@/public/lib/utils";

interface IProps {
  accordionData: ISubContent[];
    accordionTitle: string;
    className?: string;
}

export default function Accordion({ accordionData, accordionTitle, className }: IProps) {
    const { activeAccordion, handleClick, handleToggle } = useContext(OpenCloseContext);
    
    const handleRotate = (idx: any) => {
        return activeAccordion === idx ? "rotate-180" : "";
    };

  useEffect(() => {
    for (let i = 1; i <= accordionData.length; i++) {
      const tab = document.getElementById(`tab-${i}`)!;
      tab.style.maxHeight =
        activeAccordion === i ? `${tab.scrollHeight}px` : "0";
    }
  }, [activeAccordion, accordionData]);

  return (
    <main className={cn("p-5 w-screen", className)}>
      <div className="flex justify-center items-start my-2">
        <div className="w-full my-1 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-44">
          <h2 className="text-4xl font-semibold text-center mb-8 capitalize">
            {accordionTitle}
          </h2>
          <ul className="flex flex-col">
            {accordionData.map((faq, idx: any) => (
              <li className="bg-white my-2 shadow-lg" key={idx}>
                <h2 className="flex flex-row justify-between items-center font-semibold p-3">
                  <span className="sm:text-xl sm:font-medium">{faq.name}</span>
                  <IconAccordion
                    onClick={() => handleClick(idx + 1)}
                    className={`cursor-pointer ${handleRotate(idx + 1)}`}
                  />
                </h2>
                <div
                  id={`tab-${idx + 1}`}
                  className="border-l-2 border-t border-t-neutral-100 border-l-purple-600 overflow-hidden duration-500"
                  style={{ maxHeight: handleToggle(idx + 1) }}
                >
                  <p className="p-3 text-gray-900 tracking-wide">
                    {faq.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
