"use client"

import Sections from '@/components/ui/Sections';
import { admissionsSectionData } from '@/public/data/sectionData';
import useScrollToSectionId from '@/public/lib/hooks/use-get-section-id';

type Props = {}

const Admissions = (props: Props) => {
  useScrollToSectionId();

  return (
    <div className="space-y-10">
      <Sections sectionData={admissionsSectionData} />
    </div>
  )
}

export default Admissions;