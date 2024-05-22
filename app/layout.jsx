import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from '../components/providers/convex-client-providers';




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Admin Interface",
  description: "Admin Interface for Event Site",
};

export default function RootLayout({ children }) {
  return (
 
      <html lang="en" suppressHydrationWarning>
        <body>
         
          <ConvexClientProvider>
          {children}
          </ConvexClientProvider>
        </body>
      </html>
  
  );
}
