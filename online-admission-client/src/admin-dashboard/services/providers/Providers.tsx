import CustomSessionProvider from "./SessionProvider";

const Providers = ({ children }: IChildren) => {
  return (
    <CustomSessionProvider>{children}</CustomSessionProvider>
  );
};

export default Providers;
