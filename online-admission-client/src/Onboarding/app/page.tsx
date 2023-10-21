import Carousel from '@/components/Carousel';
import DownloadButton from '@/components/DownloadButtton';
import ProgramCard from '@/components/ProgramCard';
import AdmissionForm from '@/components/forms/AdmissionForms';
import Header from '@/components/ui/Header';
import Image from 'next/image';
import { fetcher } from './api/utils';
import LoadingSkeleton from '@/components/ui/Skeleton';
import Footer from '@/components/ui/Footer';

const HomeLayout = ({ children }: IChildren) => (
  <>
    <div className="mb-auto">
      <Header />
    </div>
    <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] mt-4 mb-8">
      {children}
    </div>
    <div className="z-10">
      <Footer />
    </div>
  </>
);

type Props = {}

const Home = async (props: Props) => {
  // const programs = await fetcher(process.env.PROGRAMS_URL!, 'GET', 'no-store') as IProgram[];
  
  // const files = await myGetWithCredentials(process.env.LIST_FILES!);

  const baseurl = `${process.env.API_BASE_URL}/${process.env.FILES_ROOT}`
  const serverUrl = `${baseurl}/${process.env.GOOGLE_DRIVE_FILE_ID!}/view`;

  return (
    <HomeLayout>
      <div className="text-lg font-semibold ">
        <div>
          {/* <div className="my-6">
            <Carousel data={programs} autoIncrement />
          </div> */}
          {/* <Image
          src={serverUrl}
          width={400}
          height={150}
          alt="image"
          className="border w-full h-60 object-cover"
        /> */}
          {/* <LoadingSkeleton /> */}
          <h2>Download Our Latest Report</h2>
          <DownloadButton
          text="Download Now"
          fileId={process.env.GOOGLE_DRIVE_FILE_ID!}
          baseurl={baseurl}
        />
        </div>
        <AdmissionForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {Array.isArray(programs) &&
          programs?.map((program) => (
            <ProgramCard key={program.id} program={program} home />
          ))} */}
          {/* {Array.isArray(files) &&
          files?.map((program) => (
            <ProgramCard key={program.id} program={program} home />
          ))} */}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;