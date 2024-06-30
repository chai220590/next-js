import { MinusIcon } from "@heroicons/react/24/solid";
import React from "react";

function ProductDetailPolicy() {
  return (
    <div>
      <span className="font-bold">Chính sách:</span>
      {[1, 2, 3, 4].map((x, index) => {
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
  );
}

export default ProductDetailPolicy;
