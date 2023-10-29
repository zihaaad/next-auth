import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "NextAuth.js Authentication",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
