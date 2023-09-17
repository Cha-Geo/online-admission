import { ReactNode } from "react";
import "../styles/globals.css"
import type { Metadata } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export const metadata: Metadata = {
  title: "PromptVerse",
  description: "Ignite Creativity & Explore Infinite Prompts",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
      >
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {children}
          </main>
          <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
