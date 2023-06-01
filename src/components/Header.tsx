import Link from "next/link";
import Image from "next/image";
import pharmacy from "../../public/pharmacy_people.png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, // class 명을 참고해서 import 시켜주고 ex) fa-arrow-left
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex justify-between items-center container mx-auto">
      <Link href="/">
        <Image
          src={pharmacy}
          alt="pharmacy people"
          width={100}
          height={100}
          priority={true}
        />
      </Link>
      <div className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral-200">
        <FontAwesomeIcon icon={faBars} className="fa-2x" />
      </div>
    </header>
  );
}
