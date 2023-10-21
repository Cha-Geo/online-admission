"use client"

import Sections from "@/components/ui/Sections";
import { aboutSectionData } from "@/public/data/sectionData";
import useScrollToSectionId from "@/public/lib/hooks/use-get-section-id";


const About = () => {
  useScrollToSectionId();
  
  return (
    <div className="space-y-10">
      <Sections sectionData={aboutSectionData} />
    </div>
  );
};

export default About;
