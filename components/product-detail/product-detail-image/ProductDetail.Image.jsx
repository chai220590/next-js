"use client";
import { Image } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
const productImage = `https://lavenderstudio.com.vn/wp-content/uploads/2017/10/chup-hinh-san-pham-my-pham-spa-03.jpg`;
import ProductDetailMainImage from "./ProductDetail.MainImage";
import ProductDetailOneImage from "./ProductDetail.OneImage";

function ProductDetailImage() {
  const [currentImage, setCurrentImage] = useState(0);
  const refCountDown = useRef();
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    if (isStop) {
      clearTimeout(refCountDown.current);
    } else {
      refCountDown.current = setTimeout(() => {
        if (currentImage === 4) {
          setCurrentImage(0);
        } else {
          setCurrentImage(currentImage + 1);
        }
      }, 5000);
    }

    return () => {
      clearTimeout(refCountDown.current);
    };
  }, [currentImage, isStop]);

  const imageList = [
    {
      name: "Hình ảnh 1",
      image:
        "https://lavenderstudio.com.vn/wp-content/uploads/2017/10/chup-hinh-san-pham-my-pham-spa-03.jpg",
    },
    {
      name: "Hình ảnh 2",
      image:
        "https://down-vn.img.susercontent.com/file/2c3526151794156ff484330555061ef0",
    },
    {
      name: "Hình ảnh 3",
      image:
        "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2018/12/Avon-Pur-Blanca-Blush-e1545017031189.jpg",
    },
    {
      name: "Hình ảnh 4",
      image: "https://cf.shopee.vn/file/6d3126a339e6be0e0d2222b7007b6c42",
    },
    {
      name: "Hình ảnh 5",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/183/726/products/13534383-1126660140799383-351427671-n-77618-zoom.jpg?v=1689411794407",
    },
  ];

  return (
    <div className="md:col-span-2 col-span-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="md:block hidden col-span-2">
          {imageList.map((x, index) => {
            return (
              <ProductDetailOneImage
                item={x}
                index={index}
                key={`${index}`}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            );
          })}
        </div>
        <div className="col-span-12 md:col-span-10">
          <ProductDetailMainImage
            image={imageList[currentImage]}
            setIsStop={setIsStop}
          />
        </div>
        <div className="md:hidden col-span-12 md:col-span-2 gap-2 grid grid-cols-10">
          {imageList.map((x, index) => {
            return (
              <ProductDetailOneImage
                item={x}
                key={`${index}`}
                index={index}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailImage;
