'use client'
import Image from 'next/image';
import {FaMapMarkerAlt, FaBriefcase, FaUniversity} from 'react-icons/fa';

const ProfileCard = () => {
  const profileImage = "/assets/img/team-2-800x800.jpg";
  const profileName = "Jenna Stones";
  const location = "Los Angeles, California";
  const occupation = "Solution Manager - Creative Tim Officer";
  const education = "University of Computer Science";
  const description =
    "An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.";

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 flex justify-center">
            <div className="relative">
              <Image
                width={300}
                height={350}
                alt="Profile"
                src={profileImage}
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
              />
            </div>
          </div>
          <div className="w-full px-4 text-center mt-20">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              <ProfileStats label="Friends" value="22" />
              <ProfileStats label="Photos" value="10" />
              <ProfileStats label="Comments" value="89" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 px-4">
          <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
            {profileName}
          </h3>
          <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
            <div className="flex items-center justify-start sm:justify-center">
              <FaMapMarkerAlt className="mr-2 text-lg text-blueGray-400" />
              {location}
            </div>
          </div>
          <div className="mb-2 text-blueGray-600 mt-2">
            <div className="flex items-center justify-start sm:justify-center">
              <FaBriefcase className="mr-2 text-lg text-blueGray-400" />
              {occupation.length < 30
                ? occupation
                : `${occupation.slice(0, 30)} ...`}
            </div>
          </div>
          <div className="mb-2 text-blueGray-600">
            <div className="flex items-center justify-start sm:justify-center">
              <FaUniversity className="mr-2 text-lg text-blueGray-400" />
              {education}
            </div>
          </div>
        </div>
        <ProfileDescription description={description} />
      </div>
    </div>
  );
};

const ProfileStats = ({ label, value }: { label: string, value: string}) => (
  <div className="mr-4 p-3 text-center">
    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
      {value}
    </span>
    <span className="text-sm text-blueGray-400">{label}</span>
  </div>
);

const ProfileDescription = ({ description }: {description: string}) => (
  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-9/12 px-4">
        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
          {description}
        </p>
        <a
          href="#pablo"
          className="font-normal text-lightBlue-500"
          onClick={(e) => e.preventDefault()}
        >
          Show more
        </a>
      </div>
    </div>
  </div>
);

export default ProfileCard;
