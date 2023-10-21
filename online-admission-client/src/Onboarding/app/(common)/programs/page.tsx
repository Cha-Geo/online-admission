import { fetcher } from "@/app/api/utils";
import ProgramCard from "@/components/ProgramCard";
import Sections from "@/components/ui/Sections";
import LoadingSkeleton from "@/components/ui/Skeleton";
import { programsSectionData } from "@/public/data/sectionData";
import { Suspense } from "react";

type Props = {};

const Programs = async (props: Props) => {
  const programs = await fetcher(process.env.PROGRAMS_URL!, 'GET', 'no-cache') as IProgram[];

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold mb-4">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(programs) &&
          programs?.map((program) => (
            <Suspense key={program.id} fallback={<LoadingSkeleton />}>
              <ProgramCard key={program.id} program={program} />
            </Suspense>
          ))}
      </div>
      <Sections sectionData={programsSectionData} />
    </div>
  );
}

export default Programs;