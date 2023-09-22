import Image from "next/image";
import Link from "next/link";

// components/ProgramCard.js
interface IProgramCard {
    program: IPosts;
}
const ProgramCard = ( { program }: IProgramCard) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* <Image
          src={program.title}
          alt={program.body.slice(0,10)}
          width={20}
          height={20}
          className="w-full h-40 object-cover"
        /> */}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {program.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{program.body}</p>
          <div className="flex justify-between mb-8">
            <p className="text-sm text-gray-700">Prerequisites: {program.id}</p>
            <p className="text-sm text-gray-700">
              Application Deadlines: {program.userId}
            </p>
          </div>
          <Link
            href={`/programs/${program.id}`}
            className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm hover:bg-indigo-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      // <div className="bg-white shadow-md rounded-lg p-4 m-4">
      //   <h3 className="text-xl font-semibold text-gray-800 mb-2">
      //     {program.name}
      //   </h3>
      //   <p className="text-sm text-gray-600 mb-4">{program.description}</p>
      //   <div className="flex justify-between">
      //     <p className="text-sm text-gray-700">
      //       Prerequisites: {program.prerequisites}
      //     </p>
      //     <p className="text-sm text-gray-700">
      //       Application Deadlines: {program.applicationDeadlines}
      //     </p>
      //   </div>
      // </div>
    );
};

export default ProgramCard;
