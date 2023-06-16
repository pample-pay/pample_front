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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
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
