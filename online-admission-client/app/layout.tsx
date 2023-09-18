import { ReactNode } from "react";
import "../styles/globals.css";
import type { Metadata } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar"; 
import { fontMono, fontSans } from "@/public/lib/fonts";
import { cn } from "@/public/lib/utils";

export const metadata: Metadata = {
  title: "Alpha University - Admissions",
  description: "Apply for admission to Alpha University.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased bg-gradient-to-r from-white to-neutral-50 bg-opacity-5",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <div className="h-screen flex flex-col">
          <div className="">
            <Navbar />
          </div>

          <main className="flex flex-col justify-center items-center sm:px-6 min-h-[80vh]">
            {children}
          </main>

          <div className="z-10">
            <Footer />
          </div>
        </div>

        {/* Tailwind CSS Indicator (for development) */}
        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
