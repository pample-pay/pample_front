import Link from "next/link";
import { Breadcrumbs } from "@material-tailwind/react";

export default function LoginBreadcrumbs() {
  return (
    <Breadcrumbs separator="|" className="bg-white ">
      <Link href="#" className="opacity-60">
        비밀번호 찾기
      </Link>
      <Link href="#" className="opacity-60">
        아이디 찾기
      </Link>
      <Link href="/signup">회원가입</Link>
    </Breadcrumbs>
  );
}
