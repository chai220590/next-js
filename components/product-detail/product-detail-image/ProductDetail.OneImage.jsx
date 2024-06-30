import { Image } from "@nextui-org/react";
import React from "react";

function ProductDetailOneImage({ item, setCurrentImage, index, currentImage }) {
  return (
    <div
      key={`${index}`}
      className="md:mb-2 col-span-2"
      onClick={() => {
        setCurrentImage(index);
      }}
    >
      <Image
        src={item.image}
        className={`border ${index === currentImage ? "border-primary" : "border-default"}`}
      />
    </div>
  );
}

export default ProductDetailOneImage;
