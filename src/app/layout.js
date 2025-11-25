import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextCommerce",
  description:
    "Simple product catalog built with Next.js, NextAuth, and Express API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>

          <header className="border-b">
            <div className="container">
              <Navbar />
            </div>
          </header>

          <main className="container min-h-screen">{children}</main>

          <footer className="border-t py-6">
            <div className="container">
              <Footer />
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
