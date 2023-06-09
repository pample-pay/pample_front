import { Button, Input } from "@material-tailwind/react";

export default function LoginInput() {
  return (
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
  );
}
