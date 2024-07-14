import React from "react";
import NewsSectionComponent from "../../components/NewsSectionComponent";

type PostDetailReadMoreNewsProps = {
  data: any;
};

function PostDetailReadMoreNews({ data }: PostDetailReadMoreNewsProps) {
  return (
    <div className="mt-12">
      <hr />
      <div className="mt-12">
        <NewsSectionComponent title={""} newsData={data} />
      </div>
    </div>
  );
}

export default PostDetailReadMoreNews;
