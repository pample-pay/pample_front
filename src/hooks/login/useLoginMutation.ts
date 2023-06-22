import { useState } from "react";
import { User } from "@/components/login/types";
import login from "@/app/apis/auth/apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useLoginMutation() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const { mutate } = useMutation(
    (user: User) => login(user.id, user.password),
    {
      onSuccess: (response) => {
        console.log(response.data.token.access_token);
        localStorage.setItem("access_token", response.data.token.access);
        localStorage.setItem("refresh_token", response.data.token.refresh);
        setIsLogin(true);
        router.replace("/");
        // localStorage.setItem('access_token',loginData.)
      },
      onError: (error) => {
        console.log(error);
        setIsLogin(false);
      },
    }
  );
  return { isLogin, mutate };
}
