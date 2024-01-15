import { cn } from '@repo/ui/src/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/lib/providers';
import Header from '../components/header';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ipropel',
  description: 'Intelligent E-Learning Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Providers>
      <html className="light" lang="en">
        <body className={cn(inter.className, 'bg-background w-full')}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
