"use client";
import { useRouter } from "next/navigation";

function AdminAuth({ children }: any) {
  const router = useRouter();
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (!!accessToken) {
    return <div>{children}</div>;
  } else {
    router.replace("/login");
    return <div>Kiểm tra thông tin...</div>;
  }
}

export default AdminAuth;
