import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Suspense } from "react";
import Loading from "../loading";

const CommonLayout = async ({ children }: IChildren) => {
    return (
      <>
        <div className="mb-auto">
          <Header />
        </div>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] mt-4 mb-8">
          {children}
        </div>
        </Suspense>
        <div className="z-10">
          <Footer />
        </div>
      </>
    );
};

export default CommonLayout;

{
  /* <div className="mb-auto">
              <Header />
            </div>

            <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] mt-4 mb-8">
              {children}
            </div> */
}
