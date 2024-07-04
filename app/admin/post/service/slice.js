const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  postDetail: undefined,
  postList: [],
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
  },
});

const PostReducer = PostSlice.reducer;
export default PostReducer;

export const PostActions = PostSlice.actions;
export const PostSelectors = {
  postDetail: (state) => state.post.postDetail,
  postList: (state) => state.post.postList,
};
