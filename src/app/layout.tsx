import "./globals.css";
import { Open_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Header from "../components/Header";
import Providers from "./providers";
const sans = Open_Sans({ subsets: ["latin"] });

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
      <body className={sans.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
