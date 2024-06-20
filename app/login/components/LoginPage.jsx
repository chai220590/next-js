"use client";
import { useAppDispatch } from "@/services/hooks/hook";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";

function LoginPage() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Xử lý logic đăng nhập ở đây
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
