import Footer from "@/components/ui/Footer";

const EntryLayout = async ({ children }: IChildren) => {
    return (
      <>
        <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] -mt-8 mb-8">
          {children}
        </div>
        <div className="z-10">
          <Footer />
        </div></>
    );
}

export default EntryLayout;

{/* <div className="mb-auto">
              <Header />
            </div>

            <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] mt-4 mb-8">
              {children}
            </div> */}