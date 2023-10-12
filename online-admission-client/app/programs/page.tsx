import ProgramCard from "@/components/ProgramCard";
import Sections from "@/components/ui/Sections";
import { programsSectionData } from "@/public/data/sectionData";
import { myGetWithCredentials } from "@/services/serverDataFetching";
import { AxiosError } from "axios";

import { cookies } from "next/headers";
import Image from "next/image";

type Props = {};

export async function fetchAllProgramImages() {
  const programImageURL = `${process.env.API_BASE_URL}/programmes/images`;
  const postInit: RequestInit = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-store", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  };
  try {
    const res = await fetch(programImageURL, postInit);

    if (!res.ok) {
      console.log("Network response was not ok");
    }
    const imageUrls = await res.json();
    console.log(imageUrls);

    return imageUrls;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log("Error Logging User In: " + error.message);
  }
}

const Programs = async (props: Props) => {
  const programs = (await myGetWithCredentials(
    process.env.PROGRAMS_URL!
  )) as IProgram[];;
  const programImages: string[] = await fetchAllProgramImages();
  
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold mb-4">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(programs) &&
          programs?.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        {programImages.map((filename: string) => (
          <Image
            key={filename}
            src={`/assets/images/${filename}`}
            alt={filename}
            width={400}
            height={400}
          />
        ))}
      </div>
      <Sections sectionData={programsSectionData} />
    </div>
  );
}

export default Programs;