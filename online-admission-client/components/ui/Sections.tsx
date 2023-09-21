import React from "react";
import { Button } from "../button";

type Props = {
  sectionData: ISection[];
};

const Sections: React.FC<Props> = ({ sectionData }) => {
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
          <Button>{'See More'}</Button>
        </section>
      ))}
    </div>
  );
};

export default Sections;
