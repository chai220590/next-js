const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  publicNews: [],
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews() {},
    setNews(state, { payload }) {
      state.publicNews = payload?.news;
    },
  },
});

const NewsReducer = NewsSlice.reducer;
export default NewsReducer;

export const NewsActions = NewsSlice.actions;
export const NewsSelectors = {
  publicNews: (state) => state.news.publicNews,
};
