import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, // class 명을 참고해서 import 시켜주고 ex) fa-arrow-left
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pample",
  description: "pharmacy people",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <header className="flex justify-between items-center">
          <Link href="/" className="ml-5">
            <Image
              src="/pharmacy_people.png"
              alt="pharmacy people"
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral-200 mr-10">
            <FontAwesomeIcon icon={faBars} className="fa-2x" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
