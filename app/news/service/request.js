import SysFetch from "../../../services/fetch";

const NewsRequest = {
  getPublic: () => {
    return SysFetch.get("posts/news");
  },
};
export default NewsRequest;
