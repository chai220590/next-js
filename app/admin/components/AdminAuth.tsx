"use client";
import { LoginActions } from "@/app/login/service/login.slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AdminAuth({ children }: any) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [authing, setAuthing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      if (!!!accessToken) {
        router.replace("/login");
      } else {
        dispatch(LoginActions.setAccessToken(accessToken));
        localStorage.setItem("ACCESS_TOKEN", accessToken);
        setAuthing(true);
      }
    }
  }, [dispatch]);
  return !authing ? <div>Kiểm tra dữ liệu...</div> : <div>{children}</div>;
}

export default AdminAuth;
