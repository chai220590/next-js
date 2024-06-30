import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import React from "react";

function ProductDetailRateStar() {
  return (
    <div className="flex items-center">
      <div className="flex mr-2">
        <StarIcon className="size-6" color="#b7dd29" />
        <StarIcon className="size-6" color="#b7dd29" />
        <StarIcon className="size-6" color="#b7dd29" />
        <StarOutlineIcon className="size-6" color="#b7dd29" />
        <StarOutlineIcon className="size-6" color="#b7dd29" />
      </div>
      <div>
        <span className="font-medium">(3.0/5)</span>
      </div>
    </div>
  );
}

export default ProductDetailRateStar;
