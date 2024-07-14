"use client";
import moment from "moment";
import { useRouter } from "next/navigation";
import React from "react";

type NewsSectionComponentProps = {
  title: string;
  newsData: any;
};

function NewsSectionComponent({ title, newsData }: NewsSectionComponentProps) {
  const router = useRouter();
  return (
    <div>
      <div className="my-10">
        <span className="text-large">{title}</span>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-10">
        {newsData.map((oneNews: any) => {
          return (
            <div
              onClick={() => {
                if (oneNews.slug) router.push(`/news/${oneNews.slug}`);
              }}
              className="col-span-1 gap-4 hover:scale-105 transform transition-transform cursor-pointer"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <img
                    alt={oneNews.altImage}
                    className="object-cover h-[200px] w-[200px] rounded"
                    src={
                      oneNews?.image ? oneNews.image : "/images/image-icon.png"
                    }
                  />
                </div>
                <div className="col-span-2">
                  <p className="mb-2 font-medium text-medium">
                    {oneNews.title}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {moment(oneNews.createdAt).format("HH:mm DD/MM/YYYY")}
                  </p>
                  <p className="text-gray-600 mb-4">{oneNews.shortContent}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsSectionComponent;
