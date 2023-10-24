import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from 'react';

// interface WithProtectedRouteProps {
//   router: typeof useRouter;
// }

function WithProtectedRoute<T>(WrappedComponent: React.ComponentType<T>) {
  return async (props: T) => {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session?.user || !session?.access_token) {
      console.log("youve been redirected dude");
      return redirect("/auth/login");
    }

    return <WrappedComponent {...props!} />;
  };
};

export default WithProtectedRoute;


// function IsAuth<T>(Component: React.ComponentType<T>) {
//   return (props: T) => {
//     // make a api call to check if user is authenticated
//     const { data, loading, error } = useMeQuery();
//     const router = useRouter();

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error || !data) {
//       router.push("/login");
//     }

//     return (
//       <>
//         <Component {...props!} />
//       </>
//     );
//   };
// }