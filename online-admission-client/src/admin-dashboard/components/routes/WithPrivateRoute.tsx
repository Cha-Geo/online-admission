import React from "react";
import { API } from "@/app/api/config";
import { Endpoints } from "@/app/api/enpoints";
import { authHeader } from "@/app/api/route";
import Manager from "@/layouts/ManagerLayout";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// Separate function to check user verification
async function checkUserVerification(): Promise<boolean> {
  try {
    const response = await fetch(
      `${API}/${Endpoints?.validateAccount}`,
      {
        headers: authHeader(),
      }
    );

    if (response.status === 200) {
      return true; // User is verified
    }
  } catch (error) {
    console.error("Error while verifying user:", error);
  }

  return false; // User is not verified
}

const WithPrivateRoute = <P extends {}>(
  WrappedComponent: React.ComponentType<P>,
  Layout: React.ComponentType<any> = Manager
) => {
  let verified: boolean;
  return async (props: P & WithPrivateRouteProps) => {

      const session = await getServerSession(authOptions);
      console.log(session);

    // If no accessToken was found, redirect to the "/" page.
  
      if (!session?.user || !session?.access_token) {
          console.log("youve been redirected dude");
          return redirect("/auth/login");
        } else {
          checkUserVerification().then((isVerified) => {
            if (!isVerified) {
              redirect("/");
            }
             verified = true;
          });
        }

    return verified ? (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    ) : null;
  };
};

export default WithPrivateRoute;
