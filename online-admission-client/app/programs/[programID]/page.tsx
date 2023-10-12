import { myGetWithCredentials } from "@/services/serverDataFetching";

type Props = {
  params: {
    programID: string;
  };
};

export async function fetchStaticProgram(params: { programID: string }): Promise<IProgram> {
  const { programID } = params;
  const programURL = `programmes/${programID}`;
  return myGetWithCredentials(programURL);
}

const ProgramDetails = async ({ params }: Props) => {
  const program = await fetchStaticProgram(params);
  
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold">{program?.name}</h1>
        <p className="text-gray-600 mt-2">{program?.createdAt.toString()}</p>
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
  );
};

export default ProgramDetails;
