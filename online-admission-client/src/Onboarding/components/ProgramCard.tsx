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

    const imageUrl =
      program.images && program.images[0]?.driveid
        ? `http://localhost:7700/api/programmes/drive/files/${program.images[0].driveid}/view`
        : "/assets/images/1697289858449-901907640-Screenshot (7).png";
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="m-1 rounded-ss-lg rounded-se-lg border border-neutral-50 overflow-hidden">
          <Image
            src={imageUrl}
            alt={
              program.images
                ? program.images[0].filename.slice(23)
                : program.name.slice(0, 10)
            }
            width={400}
            height={150}
            className=" w-full h-[10rem] xxs:h-[11rem] xss:h-[12rem] object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {program.name}
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            {" "}
            Application Deadlines: {program?.duration}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Prerequisites: {program?.id}
          </p>
          {home ? (
            <ViewMore id={program.id} />
          ) : (
            <div className="flex justify-between items-center ">
              <ViewMore id={program.id} outline />
              <div className="mr-2 xxs:mr-6">
                <ViewMore id={program.id} text="apply now" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default ProgramCard;
