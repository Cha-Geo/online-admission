import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/index.css";
import "@/styles/tailwind.css";
import { RouteChangeListener } from './route-change-listener';
import Providers from '@/services/providers/Providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpha University: Admin',
  description: 'This is the admin website for alpha university',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body
        className={cn("light",
          inter.className,
        )}
      >
        <Providers>
            <RouteChangeListener>
              {children}
            </RouteChangeListener>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
