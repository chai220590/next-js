import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "Article 1",
    description: "This is a short description of the first article.",
    image:
      "https://img.freepik.com/free-psd/chair-pillow_176382-874.jpg?t=st=1718872251~exp=1718875851~hmac=7a45553a9c10dc251c0ca66c2d7d65b5fbc88b59431d5d5cc127f1b9c2a1a7c6&w=996",
    link: "#",
  },
  {
    title: "Article 2",
    description: "This is a short description of the second article.",
    image:
      "https://img.freepik.com/free-psd/armchair-pillow_176382-870.jpg?t=st=1718872319~exp=1718875919~hmac=805a906b40420c7982e92024cf154feb811ca3ffda203dab33fb5e915d5eceba&w=996",
    link: "#",
  },
  {
    title: "Article 3",
    description: "This is a short description of the third article.",
    image:
      "https://img.freepik.com/free-psd/chair-pillow_176382-882.jpg?t=st=1718872297~exp=1718875897~hmac=f112bf574c055170083cd776bcaccae874a6d0ceb24c0aaf391802c770bf8935&w=996",
    link: "#",
  },
  {
    title: "Article 4",
    description: "This is a short description of the fourth article.",
    image:
      "https://img.freepik.com/free-psd/chair-pillow_176382-882.jpg?t=st=1718872297~exp=1718875897~hmac=f112bf574c055170083cd776bcaccae874a6d0ceb24c0aaf391802c770bf8935&w=996",
    link: "#",
  },
];

const ArticleList = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
      <div className="grid grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
