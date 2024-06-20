"use client";
import { useRouter } from "next/navigation";

function AdminAuth({ children }: any) {
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken");
  if (!!accessToken) {
    console.log("yes");
    return <div>{children}</div>;
  } else {
    console.log("no");
    router.replace("/login");
    return <div>Kiểm tra thông tin...</div>;
  }
}

export default AdminAuth;
