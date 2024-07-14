"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NewsActions, NewsSelectors } from "./service/reducer";
import { useSelector } from "react-redux";
import NewsSectionComponent from "./components/NewsSectionComponent";

function page() {
  const dispatch = useDispatch();
  const publicNews = useSelector(NewsSelectors.publicNews);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    dispatch(NewsActions.getNews());
  };

  return (
    <div>
      <NewsSectionComponent title="Bài viết mới" newsData={publicNews} />
    </div>
  );
}

export default page;
