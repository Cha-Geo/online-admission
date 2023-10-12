import { ReactNode } from "react";
import "../styles/globals.css";

import type { Metadata } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Footer from "@/components/ui/Footer";
import { fontMono, fontSans } from "@/public/lib/fonts";
import { cn } from "@/public/lib/utils";
import Provider from "@/services/Provider";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Alpha University - Admissions",
  description: "Apply for admission to Alpha University.",
};

type RootLayoutProps = {
  children: ReactNode;
  isLogin?: boolean;
};

const RootLayout: React.FC<RootLayoutProps> = ({isLogin=false, children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased bg-gradient-to-r from-white to-neutral-50 bg-opacity-5 light",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Provider>
          <div className="flex flex-col min-h-screen">
            <div className="mb-auto">
              <Header />
            </div>

            <div className="flex flex-col justify-center items-center px-4 xs:px-6 sm:px-12 lg:px-24 min-h-[70vh] mt-4 mb-8">
              {children}
            </div>

            <div className="z-10">
              <Footer />
            </div>
          </div>
        </Provider>

        {/* Tailwind CSS Indicator (for development) */}
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
