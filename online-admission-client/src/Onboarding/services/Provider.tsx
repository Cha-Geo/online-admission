import { VisibilityProvider } from "./contexts/NavbarVisibilityContext";
import { OpenCloseProvider } from "./contexts/OpenCloseContext";
import Providers from "./SessionProvider";

const Provider = ({ children }: IChildren) => {

  return (
    <VisibilityProvider>
      <OpenCloseProvider>
        <Providers>{children}</Providers>
      </OpenCloseProvider>
    </VisibilityProvider>
  ); 
};

export default Provider;
