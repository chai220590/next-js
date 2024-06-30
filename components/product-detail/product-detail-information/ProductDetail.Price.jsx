import React from "react";

function ProductDetailPrice({ price = 0, sellPrice = 0 }) {
  return (
    <div>
      <div className="mb-2">
        <span className="font-bold text-4xl">
          {sellPrice.toLocaleString()} đ
        </span>
      </div>
      {!!!sellPrice ? (
        <></>
      ) : (
        <div>
          <span className="font text-2xl text-red-300 line-through">
            {price.toLocaleString()} đ
          </span>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPrice;
