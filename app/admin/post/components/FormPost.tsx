"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form"; // Import useForm and Controller from react-hook-form
import { useDispatch, useSelector } from "react-redux";
import { PostActions, PostSelectors } from "../service/slice";

// Sử dụng dynamic import để tránh lỗi SSR
const CKEditor = dynamic(
  () => import("@/components/custom-editor/CustomEditor"),
  {
    ssr: false,
  }
);

interface FormData {
  title: string;
  content: string;
}

const FormPost = () => {
  const { postId } = useParams();
  const postDetail = useSelector(PostSelectors.postDetail);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector(AppSelectors.isLoading);
  const { control, handleSubmit, setValue, register, getValues } =
    useForm<FormData>();

  useEffect(() => {
    if (postId) {
      dispatch(PostActions.getPostById(postId));
    }
  }, []);

  useEffect(() => {
    if (postDetail) {
      setValue("title", postDetail.title);
      setValue("content", postDetail.content);
    }
    return () => {
      dispatch(PostActions.setPostDetail(undefined));
    };
  }, [postDetail]);

  const onSubmit = (data: FormData) => {
    if (postId) {
      dispatch(
        PostActions.updatePost({
          postId,
          data,
        })
      );
    } else {
      dispatch(
        PostActions.createPost({
          data,
          onSuccess: (postId: any) => {
            router.push(`/admin/post/edit/${postId}`);
          },
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerHeader
        title={"Viết bài"}
        right={
          <div>
            <Button
              isLoading={isLoading}
              type="submit"
              color="primary"
              isIconOnly
            >
              <CloudArrowUpIcon className="size-4 text-white" />
            </Button>
          </div>
        }
      />
      <div className="mt-4">
        <Controller
          rules={{ required: "Tên bài viết không được bỏ trống" }}
          name="title"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <Input
                {...field}
                fullWidth
                label="Tên bài viết"
                isInvalid={!!fieldState?.error?.message}
                errorMessage={fieldState.error?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            );
          }}
        />
      </div>
      <div className="mt-4">
        <div className="mb-2">
          <label className="text-sm" htmlFor="content">
            Nội dung
          </label>
        </div>
        <CKEditor
          {...register("content")}
          value={getValues().content}
          onChange={(e: any) => {
            setValue("content", e);
          }}
        />
      </div>
    </form>
  );
};

export default FormPost;
