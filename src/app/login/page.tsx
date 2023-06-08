import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col	justify-center items-center">
      <Link href="/">
        <Image
          src="/pharmacy_people.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </Link>
    </div>
  );
}
