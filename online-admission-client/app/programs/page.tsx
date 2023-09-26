import ProgramCard from "@/components/ProgramCard";
import Sections from "@/components/ui/Sections";
import { programsSectionData } from "@/public/data/sectionData";
import { fetchStaticPosts } from "@/services/dataFetching";

type Props = {}

const Programs = async (props: Props) => {
  const programs: IPosts[] = await fetchStaticPosts();
  
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold mb-4">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      <Sections sectionData={programsSectionData} />
    </div>
  );
}

export default Programs;