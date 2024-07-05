import SysFetch from "@/services/fetch";
import qs from "querystring";
const REQUEST = {
  POST: "posts",
};

const PostRequest = {
  deletePost: (postId) => {
    return SysFetch.delete(`${REQUEST.POST}/${postId}`);
  },
  updatePost: (postId, body) => {
    return SysFetch.patch(`${REQUEST.POST}/${postId}`, body);
  },
  createPost: (body) => {
    return SysFetch.post(REQUEST.POST, body);
  },
  getPostById: (body) => {
    return SysFetch.get(`${REQUEST.POST}/${body}`);
  },
  getList: (body) => {
    return SysFetch.get(`${REQUEST.POST}?${qs.stringify(body)}`);
  },
};
export default PostRequest;
