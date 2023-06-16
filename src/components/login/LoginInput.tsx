import useLoginMutation from "@/hooks/login/loginMutation";
import { Button, Input } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { User } from "@/components/login/types";

export default function LoginInput() {
  const [user, setUser] = useState<User>({
    id: "",
    password: "",
  });

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, id: e.target.value }));
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((prev) => ({ ...prev, password: e.target.value }));
    },
    []
  );
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      mutate(user);
    }
  };
  const { isLogin, mutate } = useLoginMutation();
  return (
    <div className="flex flex-col border-slate-50 border-2 w-[32rem] justify-center items-center rounded-lg mb-3	">
      <div className="flex w-[28rem] flex-col items-center justify-center gap-10 h-52	mt-14">
        <Input
          color="cyan"
          variant="static"
          label="ID"
          type="text"
          className="w-[30rem]	"
          onChange={handleEmailChange}
          onKeyDown={handleKeypress}
        />
        <Input
          color="cyan"
          variant="static"
          label="비밀번호"
          type="password"
          className="w-[30rem]	mb-20"
          onChange={handlePasswordChange}
          onKeyDown={handleKeypress}
        />
        <Button
          className="w-[28rem] mb-12 "
          color="cyan"
          ripple={false}
          onClick={() => mutate(user)}
        >
          로그인
        </Button>
      </div>
      {isLogin ? (
        ""
      ) : (
        <div className="mb-6 text-sm	text-red-400	 text-center	">
          Email 또는 비밀번호를 잘못 입력했습니다.
          <br />
          입력하신 내용을 다시 확인해주세요
        </div>
      )}
    </div>
  );
}
