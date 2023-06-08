import type { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  return (
    <div className="flex flex-col	justify-center items-center">
      <Link href="/">
        <Image
          src="/pharmacy_people.png"
          width={250}
          height={250}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
}
LoginPage.getLayout = (page: ReactElement) => {
  return page;
};
