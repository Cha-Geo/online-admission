import { ReactNode, Suspense } from "react";
import "../styles/globals.css";
import '../styles/organogram.css'
import type { Metadata } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { fontMono, fontSans } from "@/public/lib/fonts";
import { cn } from "@/public/lib/utils";
import Provider from "@/services/Provider";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Alpha University - Admissions",
  description: "Apply for admission to Alpha University.",
};

type RootLayoutProps = {
  children: ReactNode;
  isLogin?: boolean;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased bg-gradient-to-r from-white to-neutral-50 bg-opacity-5 light",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Provider>
          <div className="flex flex-col min-h-screen">

              {children}
          </div>
        </Provider>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
