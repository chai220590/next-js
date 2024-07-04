import SysFetch from "@/services/fetch";
import qs from "querystring";
const REQUEST = {
  CREATE_POST: "posts",
  GET_POST_BY_ID: "posts",
  UPDATE: "posts",
};

const PostRequest = {
  updatePost: (postId, body) => {
    return SysFetch.patch(`${REQUEST.UPDATE}/${postId}`, body);
  },
  createPost: (body) => {
    return SysFetch.post(REQUEST.CREATE_POST, body);
  },
  getPostById: (body) => {
    return SysFetch.get(`${REQUEST.GET_POST_BY_ID}/${body}`);
  },
};
export default PostRequest;
