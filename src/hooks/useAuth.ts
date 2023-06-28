"use client";
import { loginState } from "@/atoms/loginState";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { LoginInput } from "@/components/login/types";
import {
  checkAccessToken,
  login,
  refreshAccessToken,
} from "@/app/apis/auth/apis";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

export function useAuth() {
  const [loginInputMessage, setLoginInputMessage] = useState(false);

  const [isLogin, setIsLogin] = useRecoilState<boolean>(loginState);

  const router = useRouter();

  const [cookies, setCookie, removeCookie] = useCookies(["refresh_token"]);

  const { mutate: loginMutation } = useMutation(
    (user: LoginInput) => login(user.id, user.password),
    {
      onSuccess: (response) => {
        console.log(response.data.token.access_token);
        localStorage.setItem("access_token", response.data.token.access);
        setCookie("refresh_token", response.data.token.refresh);
        setLoginInputMessage(false);
        setIsLogin(true);
        router.replace("/");
      },
      onError: (error) => {
        setLoginInputMessage(true);
      },
    }
  );

  const { mutate: getUserInfoMutation } = useMutation(checkAccessToken, {
    onSuccess: (response) => {
      console.log(response.data);
      // user_id, user_name, user_type drug_id
      setIsLogin(true);
    },
    onError: () => {
      alert("다시 로그인해주세요!");
      logout();
    },
  });

  const { mutate: refreshAccessTokenMutation } = useMutation(
    (refresh: string) => refreshAccessToken(refresh),
    {
      onSuccess: (response) => {
        //refresh token 이 만료되기 전일때
        localStorage.setItem("access_token", response.data.access);
        console.log("refresh access");
        getUserInfoMutation();
        //무한 루프를 탈 가능성 만약 refreshAccessTokenMutation가 api 오류로 에러나는 경우
      },
      onError: (error) => {
        console.log("refreshAccessToken error", error);
        logout();
      },
    }
  );

  const { mutate: checkTokenMutation } = useMutation(checkAccessToken, {
    onSuccess: (response) => {
      console.log(response.data);
      // user_id, user_name, user_type drug_id
      setIsLogin(true);
    },
    onError: () => {
      if (cookies.refresh_token == null) {
        console.log("refreshtoken= null");
        logout();
      } else if (cookies.refresh_token != null) {
        refreshAccessTokenMutation(cookies.refresh_token);
      }
    },
  });

  const logout = () => {
    removeCookie("refresh_token");
    localStorage.removeItem("access_token");
    console.log("로그아웃");
    setIsLogin(false);
  };
  return { checkTokenMutation, loginInputMessage, loginMutation, logout };
}
// export const logout = () => {
//   const [isLogin, setIsLogin] = useRecoilState<boolean>(loginState);
//   const [cookies, setCookie, removeCookie] = useCookies(["refresh_token"]);

//   removeCookie("refresh_token");
//   localStorage.removeItem("access_token");
//   alert("access 만료 및 로그아웃");
//   setIsLogin(false);
// };
