"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import ProductDetailPrice from "./ProductDetail.Price";
import ProductDetailProductQuantity from "./ProductDetail.ProductQuantity";
import ProductDetailRateStar from "./ProductDetail.RateStar";
import ProductDetailSetting from "./ProductDetail.Setting";
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
        <ProductDetailSetting
          label={"Chính sách mua hàng"}
          settingName="policy"
        />
      </div>
      <div className="mb-4">
        <ProductDetailSetting
          label={"Chính sách vận chuyển"}
          settingName="delivery"
        />
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
