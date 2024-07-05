const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  postDetail: undefined,
  postList: [],
  postBodyListRequest: {
    search: "",
    pageSize: 10,
    page: 1,
  },
  postPagination: {
    pageSize: 10,
    page: 1,
    total: 0,
    totalPage: 0,
  },
};
const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost: (state, { payload }) => {},
    updatePost: (state, { payload }) => {},
    getPostById: (state, { payload }) => {},
    setPostDetail: (state, { payload }) => {
      state.postDetail = payload;
    },
    getList: (state, { payload }) => {},
    setPostList: (state, { payload }) => {
      state.postList = payload;
    },
    setPostPagination: (state, { payload }) => {
      state.postPagination = payload;
    },
    setPostBodyListRequest: (state, { payload }) => {
      state.postBodyListRequest = payload;
    },
    deletePost: (state, { payload }) => {},
  },
});

const PostReducer = PostSlice.reducer;
export default PostReducer;

export const PostActions = PostSlice.actions;
export const PostSelectors = {
  postDetail: (state) => state.post.postDetail,
  postList: (state) => state.post.postList,
  postPagination: (state) => state.post.postPagination,
  postBodyListRequest: (state) => state.post.postBodyListRequest,
};
