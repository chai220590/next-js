import { MinusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSelector } from "react-redux";
import { AppSelectors } from "@/services/app/app.slice";
function ProductDetailPolicy() {
  const systemSetting = useSelector(AppSelectors.systemSetting);

  return (
    <div>
      <span className="font-bold">Chính sách:</span>
      {JSON.parse(systemSetting?.policy || "[]").map((x, index) => {
        return (
          <div className="flex items-center" key={`${index}`}>
            <MinusIcon className="size-2 mr-2" />
            <span className="text-sm">{x}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailPolicy;
