"use client"

import Sections from "@/components/ui/Sections";
import { programsSectionData } from "@/public/data/sectionData";
import useScrollToSectionId from "@/public/lib/hooks/use-get-section-id";

type Props = {}

const Programs = (props: Props) => {
  
  useScrollToSectionId();

  return (
    <div className="space-y-10">
      <Sections sectionData={programsSectionData} />
    </div>
  );
}

export default Programs;