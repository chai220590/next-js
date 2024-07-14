import SysFetch from "@/services/fetch";
import dynamic from "next/dynamic";
import PostDetailReadMoreNews from "./components/PostDetailReadMoreNews";
import _ from "lodash";

const PostDetailComponent = dynamic(
  () => import("./components/PostDetailComponent"),
  {
    ssr: false,
  }
);
async function fetchData(slug: any) {
  try {
    const res: any = await SysFetch.get(`posts/public-detail/${slug}`);
    if (res.success) {
      return {
        post: res.post,
        posts: res.posts,
      };
    } else {
      throw "_";
    }
  } catch (error) {
    console.log({ error });
    return {
      post: undefined,
      posts: [],
    };
  }
}

const NewsDetail = async ({ params }: any) => {
  const { post, posts } = await fetchData(params.slug);
  return (
    <div>
      {post ? (
        <PostDetailComponent initialData={post} />
      ) : (
        <div className="mt-12">
          <p className="text-center">Nội dung không khả dụng</p>
        </div>
      )}
      {!_.isEmpty(posts) ? <PostDetailReadMoreNews data={posts} /> : <></>}
    </div>
  );
};

export default NewsDetail;
