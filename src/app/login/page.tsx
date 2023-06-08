"use client";
import Container from "@/components/Container";
import { Breadcrumbs, Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import pharmacy from "/public/pharmacy_people.png";
import Link from "next/link";

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
      <div className="flex border-slate-50 border-2 w-[36rem] h-[18rem] justify-center items-center rounded-lg mb-3	">
        <div className="flex w-[30rem] flex-col items-center justify-center gap-10 h-52	">
          <Input
            color="cyan"
            variant="static"
            label="Email"
            type="email"
            className="w-[30rem]	"
          />
          <Input
            color="cyan"
            variant="static"
            label="비밀번호"
            type="password"
            className="w-[30rem]	mb-20"
          />
          <Button className="w-[30rem]" color="cyan" ripple={false}>
            로그인
          </Button>
        </div>
      </div>
      <Breadcrumbs separator="|" className="bg-white ">
        <Link href="#" className="opacity-60">
          비밀번호 찾기
        </Link>
        <Link href="#" className="opacity-60">
          아이디 찾기
        </Link>
        <Link href="/signup">회원가입</Link>
      </Breadcrumbs>
    </Container>
  );
}
