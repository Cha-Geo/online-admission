import Link from "next/link";
import Image from "next/image";

interface IProgramCard {
  program: IProgram;
  home?: boolean;
}

interface IViewMoreProps {
  id: string;
  outline?: boolean
  text?: string;
}

export const ViewMore: React.FC<IViewMoreProps> = ({ id, outline, text }) => (
  <Link
    href={`/programs/${id}`}
    className={`px-4 py-2  rounded-full text-sm transition duration-300 capitalize ${
      outline
        ? "bg-white hover:bg-neutral-100"
        : "bg-indigo-500 text-white hover:bg-indigo-600"
    }`}
  >
    {text ? text : "Learn More"}
  </Link>
);


const ProgramCard = ({ program, home }: IProgramCard) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="m-1 rounded-ss-lg rounded-se-lg border border-neutral-50 overflow-hidden">
          <Image
            src={`/assets/images/${program.images[0].filename}`}
            alt={program.images[0].originalname}
            width={400}
            height={150}
            className=" w-full h-[18rem] object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {program.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {program.createdAt.toString()}
          </p>
          <div className="flex justify-between mb-8">
            <p className="text-sm text-gray-700">Prerequisites: {program.id}</p>
            <p className="text-sm text-gray-700">
              Application Deadlines: {program.duration}
            </p>
          </div>
          {home ? (
            <ViewMore id={program.id} />
          ) : (
            <div className="flex justify-between items-center  ">
              <ViewMore id={program.id} outline/>
              <div className="mr-6">
                <ViewMore id={program.id} text="apply now"/>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProgramCard;
