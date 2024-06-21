"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AdminAuth({ children }: any) {
  const router = useRouter();
  const [authing, setAuthing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      if (!!!accessToken) {
        router.replace("/login");
      } else {
        setAuthing(true);
      }
    }
  }, []);
  return !authing ? <div>Kiểm tra dữ liệu...</div> : <div>{children}</div>;
}

export default AdminAuth;
