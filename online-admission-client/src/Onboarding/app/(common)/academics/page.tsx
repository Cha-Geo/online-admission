"use client"

import Sections from '@/components/ui/Sections';
import { academicsSectionData } from '@/public/data/sectionData';
import useScrollToSectionId from '@/public/lib/hooks/use-get-section-id';

type Props = {}

const Academics = (props: Props) => {
  useScrollToSectionId();

  return (
    <div className="space-y-10">
      <Sections sectionData={academicsSectionData} />
    </div>
  );
}

export default Academics;;