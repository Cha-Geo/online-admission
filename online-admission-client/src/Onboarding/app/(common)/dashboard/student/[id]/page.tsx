import { myGetWithCredentials } from '@/services/serverDataFetching';
import React from 'react';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { API } from '@/app/api/utils';

type Props = {
  params: {
    id: string;
  };
};

export async function fetchStaticStudent(params: {
  id: string;
}, token: string): Promise<IUser> {
  const { id } = params;
  const url = `${API}/applicants/${id}`;
//   return myGetWithCredentials(url, "force-cache");
    const res = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        credentials: 'include',
        // cache: 'force-cache',
    });
    if (res.status === 401) {
        console.log(res.statusText);
    }
    if (!res.ok) {
        console.log('opps, something occured');
    }
    return await res.json();
}

const page = async ({ params }: Props) => {
    const session = await getServerSession(authOptions);
    const user = await fetchStaticStudent(params, session?.token!)
  return (
    <div className="min-h-screen">
        <h1 className="text-2xl">User Dashboard</h1>

      <main className="mx-auto p-4">
        <div className="mx-auto">
          <div className="mb-4 text-center">
            <Image
              src='/assets/images/1696459939954-768809989-pharmacy-bg.jpg'
              alt={`${user.username}'s Photo`}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            {user.username}
          </h2>
          <p className="text-gray-600 text-center mb-4">{user.email}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-200 p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <p>
                <strong>First Name:</strong> {user?.profile?.first_name || 'First Name'}
              </p>
              <p>
                <strong>Location:</strong> {user?.profile?.area || 'Area or City or State'}
              </p>
              <p>
                <strong>Role:</strong> {user?.role}
              </p>
            </div>
            <div className="bg-blue-200 p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Documents</h3>
              {/* <ul>
                {user.documents.map((document, index) => (
                  <li key={index}>{document}</li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page