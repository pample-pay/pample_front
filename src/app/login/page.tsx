"use client";
import Container from "@/components/Container";
import Image from "next/image";
import pharmacy from "/public/pharmacy_people.png";
import Link from "next/link";
import LoginInput from "@/components/login/LoginInput";
import LoginBreadcrumbs from "@/components/login/LoginBreadcrumbs";

export default function LoginPage() {
  return (
    <Container className="flex-col justify-center items-center m-18">
      <Link href="/">
        <Image
          src={pharmacy}
          alt="pharmacy people"
          width={230}
          height={230}
          priority={true}
        />
      </Link>
      <LoginInput />
      <LoginBreadcrumbs />
    </Container>
  );
}
