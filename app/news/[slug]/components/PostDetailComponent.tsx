import { CalendarIcon, EyeIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import React from "react";

type PostDetailComponentProps = {
  initialData: any;
};

function PostDetailComponent({ initialData }: PostDetailComponentProps) {
  return (
    <div>
      <div className="gap-4 grid grid-cols-4">
        <div className="col-span-1">
          <img
            alt={initialData.altImage}
            className="w-full rounded"
            src={
              initialData?.image ? initialData.image : "/images/image-icon.png"
            }
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-[24px] font-medium mb-4">{initialData.title}</h1>
          <div className="mb-4 flex gap-2 items-center">
            <CalendarIcon className="size-4" />
            <p className="text-gray-500 text-sm">
              {moment(initialData.createdAt).format("HH:mm DD/MM/YYYY")}
            </p>
            <EyeIcon className="size-4" />
            <p className="text-gray-500 text-sm">{initialData.view}</p>
          </div>
          <p className="mb-4">{initialData.shortContent}</p>
        </div>
      </div>
      <div className="mt-20">
        <div
          dangerouslySetInnerHTML={{
            __html: initialData.content,
          }}
        ></div>
      </div>
    </div>
  );
}

export default PostDetailComponent;
