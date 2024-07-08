"use client";
import ContainerHeader from "@/components/container-header/ContainerHeader";
import { AppSelectors } from "@/services/app/app.slice";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form"; // Import useForm and Controller from react-hook-form
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify"; // Import slugify
import { PostActions, PostSelectors } from "../service/slice";
import ImageUpload from "./ImageUploadComponent";

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
  shortContent: string;
  slug: string;
  altImage: string;
  image: string;
}

const FormPost = () => {
  const { postId } = useParams();
  const postDetail = useSelector(PostSelectors.postDetail);
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector(AppSelectors.isLoading);
  const { control, handleSubmit, setValue, register, getValues, watch } =
    useForm<FormData>();
  const watchImage = watch(["image"]);
  useEffect(() => {
    if (postId) {
      dispatch(PostActions.getPostById(postId));
    }
  }, []);

  useEffect(() => {
    if (postDetail) {
      setValue("title", postDetail.title);
      setValue("content", postDetail.content);
      setValue("shortContent", postDetail.shortContent);
      setValue("slug", postDetail.slug);
      setValue("altImage", postDetail.altImage);
      setValue("image", postDetail.image);
    }
    return () => {
      dispatch(PostActions.setPostDetail(undefined));
    };
  }, [postDetail]);

  const handleTitleChange = (event: { target: { value: any } }) => {
    const newTitle = event.target.value;
    setValue("title", newTitle);
    const newSlug = slugify(newTitle, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    setValue("slug", newSlug);
  };

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

  const renderUploadImage = useMemo(() => {
    return (
      <ImageUpload
        image={getValues().image}
        setImage={(url: string) => {
          setValue("image", url);
        }}
      />
    );
  }, [watchImage]);

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
      <div className=" grid grid-cols-4 gap-4">
        <div className=" col-span-3">
          <div className="mb-4">
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
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      handleTitleChange(e);
                    }}
                  />
                );
              }}
            />
          </div>
          <div className="mb-4">
            <Controller
              rules={{ required: "Slug bài viết không được bỏ trống" }}
              name="slug"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    fullWidth
                    label="Slug"
                    isInvalid={!!fieldState?.error?.message}
                    errorMessage={fieldState.error?.message}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                );
              }}
            />
            <p className="text-small text-default-400 mt-2">
              Slug đường dẫn thân thiện tới bài viết
            </p>
          </div>
          <div className="mb-4">
            <Controller
              rules={{ required: "Mô tả ngắn không được bỏ trống" }}
              name="shortContent"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Textarea
                    {...field}
                    fullWidth
                    label="Mô tả ngắn"
                    isInvalid={!!fieldState?.error?.message}
                    errorMessage={fieldState.error?.message}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                );
              }}
            />
          </div>
          <div className="mb-4">
            <CKEditor
              {...register("content")}
              value={getValues().content}
              onChange={(e: any) => {
                setValue("content", e);
              }}
            />
          </div>
        </div>
        <div className=" col-span-1">
          <div className="mb-4">
            {renderUploadImage}
            <p className="text-small text-default-400 mt-2">
              Hình ảnh của bài viết
            </p>
          </div>
          <div className="mb-4">
            <Input label="Alt ảnh" />
            <p className="text-small text-default-400 mt-2">
              Alt ảnh sẻ giúp hình ảnh dễ dàng được tìm thấy bởi google
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPost;
