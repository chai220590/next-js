import { Button } from "@nextui-org/button";
import React from "react";

function BannerLeftComponent() {
  return (
    <div className="items-center justify-center flex md:h-[800px]">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:text-xl">
          Beautiful, fast and modern React UI library.
        </p>
        <div className="mt-3">
          <Button variant="solid" color="primary">
            Xem thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerLeftComponent;
