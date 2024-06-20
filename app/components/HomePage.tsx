"use client"
import withIntersectionObserver from "./WithIntersectionObserver";
import ArticleList from "./article/ArticleList";
import ArticleSlide from "./article/ArticleSlide";
import BannerComponent from "./banner/BannerComponent";

const BannerWithObserver = withIntersectionObserver(BannerComponent);
const ArticleSlideWithObserver = withIntersectionObserver(ArticleSlide);
const ArticleListWithObserver = withIntersectionObserver(ArticleList);
function HomePage() {
  return (
    <section className="items-center justify-center gap-4 py-8 md:py-10">
      <BannerWithObserver />
      <ArticleSlideWithObserver height={600} />
      <ArticleListWithObserver />
      <ArticleSlideWithObserver />
    </section>
  );
}

export default HomePage;
