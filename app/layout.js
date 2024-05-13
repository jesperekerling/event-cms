import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Admin Interface",
  description: "Admin Interface for Event Site",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>

          <Header />
          
          {children}
          
          <Footer />

        </body>
      </html>
    </ClerkProvider>
  );
}
