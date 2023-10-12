import DownloadButton from '@/components/DownloadButtton';
import ProgramCard from '@/components/ProgramCard';
import { myGetWithCredentials } from '@/services/serverDataFetching';
import { AxiosError } from 'axios';

type Props = {}

const Home = async (props: Props) => {
  const programs = await myGetWithCredentials(process.env.PROGRAMS_URL!) as IProgram[];

  return (
    <div className="text-lg font-semibold ">
      <div>
        <h2>Download Our Latest Report</h2>
        <DownloadButton
          text="Download Now"
          fileId={process.env.GOOGLE_DRIVE_FILE_ID!}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(programs) &&
          programs?.map((program) => (
            <ProgramCard key={program.id} program={program} home />
          ))}
      </div>
    </div>
  );
}

export default Home;