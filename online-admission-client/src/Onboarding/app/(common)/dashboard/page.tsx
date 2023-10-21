// Purpose: Registered users (applicants and staff) can view and update their user profiles, including contact information and preferences.

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <div className="border-r shadow">
        <Link href={`profile/user/${session?.user.id}`}>User Profile</Link>
      </div>
          <div className="flex items-center space-x-4">
            <Image
              width={300}
              height={400}
              src="/placeholder/profile-pic.jpg"
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p>Student ID: #12345</p>
              <p>Undergraduate</p>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-semibold">
              General Academic Information
            </h2>
            <p>GPA: 3.8</p>
            <p>Dean&apos;s List: Fall 2022</p>
            <p className="text-red-500">Important: Upcoming deadlines</p>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul>
              <li>Course 1 - Assignment Due: 03/15/23</li>
              <li>Course 2 - Exam on: 03/20/23</li>
              <li>Academic Calendar</li>
            </ul>
          </div>
    </div>
  );
}

export default Profile