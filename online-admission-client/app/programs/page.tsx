import ProgramCard from "@/components/ProgramCard";
import Sections from "@/components/ui/Sections";
import { programsSectionData } from "@/public/data/sectionData";
import { AxiosError } from "axios";

import { cookies } from "next/headers";

type Props = {};


const API_BASE_URL = "http://localhost:7700/api"; // Replace with your API base URL

export async function fetchAllPrograms() {
  const programURL = `${API_BASE_URL}/programmes`;
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
    const res = await fetch(programURL, postInit);

    if (!res.ok) {
      console.log("Network response was not ok");
    }
    const user = await res.json();
    console.log(user);

    return user;
  } catch (err) {
    const error = err as AxiosError<Error>;
    console.log("Error Logging User In: " + error.message);
  }
}

const Programs = async (props: Props) => {
  const programs: any = await fetchAllPrograms();
  console.log(programs);
  
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold mb-4">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs?.map((program: any) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
      <Sections sectionData={programsSectionData} />
    </div>
  );
}

export default Programs;