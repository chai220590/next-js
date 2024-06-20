"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const articles = [
  {
    title: "Article 1",
    image:
      "https://img.freepik.com/free-psd/armchair-pillow_176382-870.jpg?t=st=1718872319~exp=1718875919~hmac=805a906b40420c7982e92024cf154feb811ca3ffda203dab33fb5e915d5eceba&w=996",
    link: "#",
  },
  {
    title: "Article 2",
    image:
      "https://img.freepik.com/free-psd/chair-pillow_176382-882.jpg?t=st=1718872297~exp=1718875897~hmac=f112bf574c055170083cd776bcaccae874a6d0ceb24c0aaf391802c770bf8935&w=996",
    link: "#",
  },
  {
    title: "Article 3",
    image:
      "https://img.freepik.com/free-psd/chair-pillow_176382-874.jpg?t=st=1718872251~exp=1718875851~hmac=7a45553a9c10dc251c0ca66c2d7d65b5fbc88b59431d5d5cc127f1b9c2a1a7c6&w=996",
    link: "#",
  },
  {
    title: "Article 4",
    image:
      "https://img.freepik.com/free-psd/comfortable-modern-chair-isolated_176382-1216.jpg?t=st=1718872340~exp=1718875940~hmac=4d50b647252797af2b287f1944f06f272d2d3c0dda02a945a2f363ad454f53e2&w=996",
    link: "#",
  },
];

const ArticleSlide = ({ height = 300 }: any) => {
  return (
    <div className="my-8 rounded">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={3000}
        stopOnHover
      >
        {articles.map((article, index) => (
          <div key={index}>
            <img
              style={{
                height,
              }}
              src={article.image}
              alt={article.title}
              className=" rounded object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ArticleSlide;
