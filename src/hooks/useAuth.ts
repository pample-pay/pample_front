"use client";
import { loginState } from "@/recoil/loginState";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { User } from "@/components/login/types";
import { checkAccessToken, login } from "@/app/apis/auth/apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export function useAuth() {
  const [loginInputMessage, setLoginInputMessage] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState<boolean>(loginState);
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["refresh_token"]);
  const loginMutation = useMutation(
    (user: User) => login(user.id, user.password),
    {
      onSuccess: (response) => {
        console.log(response.data.token.access_token);
        localStorage.setItem("access_token", response.data.token.access);
        setCookie("refresh_token", response.data.token.refresh);
        setLoginInputMessage(false);
        setIsLogin(true);
        router.replace("/");
        // localStorage.setItem('access_token',loginData.)
      },
      onError: (error) => {
        console.log(error);
        setLoginInputMessage(true);
      },
    }
  );
  const { mutate: authMutation } = useMutation(checkAccessToken, {
    onSuccess: (response) => {
      console.log(response.data);
      setIsLogin(true);
    },
    onError: () => {
      setIsLogin(false);
      if (localStorage.getItem("access_token") != null) {
        alert("다시 로그인해주세요!");
      }
    },
  });

  const logout = () => {
    removeCookie("refresh_token");
    localStorage.removeItem("access_token");
    alert("access 만료 및 로그아웃");
    setIsLogin(false);
  };
  return { authMutation, loginInputMessage, loginMutation, logout };
}
// export const logout = () => {
//   const [isLogin, setIsLogin] = useRecoilState<boolean>(loginState);
//   const [cookies, setCookie, removeCookie] = useCookies(["refresh_token"]);

//   removeCookie("refresh_token");
//   localStorage.removeItem("access_token");
//   alert("access 만료 및 로그아웃");
//   setIsLogin(false);
// };
