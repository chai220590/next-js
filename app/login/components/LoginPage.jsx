"use client";
import SysFetch from "@/services/fetch";
import { useAppDispatch } from "@/services/hooks/hook";
import { validateLogin } from "@/utils/validation";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const accessToken = localStorage.getItem("ACCESS_TOKEN");
      if (!!accessToken) {
        router.replace("/admin");
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const rs = await SysFetch.post("login", data);
      console.log({ rs });
      toast.success({
        title: "title",
      });
      // localStorage.setItem("ACCESS_TOKEN", "1");
      // router.replace("/admin");
    } catch (error) {
      console.log(error);
      toast.success("title");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
      <div className="w-[500px]">
        <h2 className="font-bold text-xl mb-4">Đăng nhập</h2>
        <div className="mb-4">
          <Input
            label="Tài khoản"
            onFocus={() => clearErrors("username")}
            {...register("username", {
              required: "Tài khoản không được bỏ trống",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-2">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Input
            label="Mật khẩu"
            type="password"
            {...register("password", {
              required: "Mật khẩu không được bỏ trống",
            })}
            onFocus={() => clearErrors("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <Button
            disabled={!isValid}
            type="submit"
            variant="solid"
            color="primary"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
