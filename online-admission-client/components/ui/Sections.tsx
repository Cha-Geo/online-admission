"use client"

import React from "react";
import { Button } from "../button";
import useScrollToSectionId from "@/public/lib/hooks/use-get-section-id";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  sectionData: ISection[];
  customId?: string;
};

const Sections: React.FC<Props> = ({ sectionData, customId }) => {
  useScrollToSectionId();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="">
      {sectionData.map((item) => (
        <section id={item.id} key={item.id} className="mb-8 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {item.data.head}
          </h3>
          <p className="text-base text-gray-600 mb-4">
            {item.data.body} {item.data.conclusion}
          </p>
          <Link href={`${pathname}/${customId ? customId : item.id}`}>
            <Button>{"See More"}</Button>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default Sections;
