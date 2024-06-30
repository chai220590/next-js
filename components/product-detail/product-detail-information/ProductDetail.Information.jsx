"use client";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import { MinusIcon, StarIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import ProductDetailProductQuantity from "./ProductDetail.ProductQuantity";
import ProductDetailPrice from "./ProductDetail.Price";
import ProductDetailRateStar from "./ProductDetail.RateStar";
import ProductDetailPolicy from "./ProductDetail.Policy";

function ProductDetailInformation() {
  // xử lý số lượng
  const [quantity, setQuantity] = useState(1);
  const onSetQuantity = (newQuantity) => {
    if (newQuantity < 1) {
      setQuantity(1);
    } else {
      setQuantity(isNaN(Number(newQuantity)) ? 1 : Number(newQuantity));
    }
  };
  return (
    <div className="md:col-span-2 col-span-4 mt-8 md:mt-0">
      <div className="mb-1">
        <span className="font-bold">Danh mục:</span> Lorem ipsum
      </div>
      <div className="mb-4">
        <span className="text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="mb-4">
        <ProductDetailRateStar />
      </div>
      <div className="mb-4">
        <ProductDetailPrice price={200000} sellPrice={100000} />
      </div>
      <div className="mb-4">
        <ProductDetailPolicy />
      </div>
      <div className="mb-4">
        <span className="font-bold">Phương thức vận chuyển:</span>
        {[1, 2].map((x, index) => {
          return (
            <div className="flex items-center" key={`${index}`}>
              <MinusIcon className="size-2 mr-2" />
              <span className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <ProductDetailProductQuantity
          quantity={quantity}
          onSetQuantity={onSetQuantity}
        />
        <Button variant="solid" color="primary">
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailInformation;
