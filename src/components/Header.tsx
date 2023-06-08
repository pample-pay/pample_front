"use client";
import Link from "next/link";
import Image from "next/image";
import pharmacy from "../../public/pharmacy_people.png";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars, // className 명을 참고해서 import 시켜주고 ex) fa-arrow-left
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@headlessui/react";

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
      <Menu>
        <div className="relative">
          <Menu.Button className="w-10 h-10 rounded-full hover:bg-neutral-200">
            <FontAwesomeIcon icon={faBars} className="fa-2x" />
          </Menu.Button>
          <Menu.Items className="absolute w-[20rem] flex flex-col	top-16 right-1 z-10">
            <div className="rounded-md bg-gray-50 border-4 border-gray-200	">
              <Menu.Item>
                <Link
                  className={`flex items-center	h-[3rem] bg-white  rounded-md  hover:bg-[#4fbecd]`}
                  href="/login"
                >
                  로그인
                </Link>
              </Menu.Item>
              <Menu.Item>
                {
                  // map 함수 쓰면 됨
                  <Link
                    className={`flex items-center	h-[3rem] bg-white  rounded-md  hover:bg-[#4fbecd]`}
                    href="/signup"
                  >
                    회원가입
                  </Link>
                }
              </Menu.Item>
            </div>
          </Menu.Items>
        </div>
      </Menu>
    </header>
  );
}
