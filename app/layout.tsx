import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/utils/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BurgTopia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto max-w-3xl">
          <Providers>
            <Nav />
            <section className="mr-5 ml-5">{children}</section>
          </Providers>
        </div>
      </body>
    </html>
  );
}