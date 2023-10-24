import LoadingSkeleton from "@/components/ui/Skeleton";
import { myGetWithCredentials } from "@/services/serverDataFetching";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  params: {
    programID: string;
  };
};

export async function fetchStaticProgram(params: { programID: string }): Promise<IProgram> {
  const { programID } = params;
  const programURL = `programmes/${programID}`;
  return myGetWithCredentials(programURL, 'force-cache');
}

const ProgramDetails = async ({ params }: Props) => {
  const program = await fetchStaticProgram(params);
  console.log(program);
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <div className="py-8">
        <div className="p-8 rounded-lg ">
          <Image
            src={
              program && program.images && program.images[0].driveid
                ? `http://localhost:7700/api/programmes/drive/files/${program.images[0].driveid}/view`
                : "/assets/images/1697289858449-901907640-Screenshot (7).png"
            }
            alt={
              program && program.images
                ? program.images[0].filename.slice(23)
                : program && program?.name?.slice(0, 10)
            }
            width={400}
            height={150}
            className=" w-full h-[18rem] object-cover"
          />
          <h1 className="text-3xl font-semibold">{program?.name}</h1>
          <p className="text-gray-600 mt-2">{program?.createdAt?.toString()}</p>
          <div className="mt-4">
            <p>
              <strong>Duration:</strong> {program?.id}
            </p>
            <p>
              <strong>Eligibility:</strong> {program?.duration}
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProgramDetails;
