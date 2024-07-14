import React from "react";
import CreatePageBodyLeft from "./CreatePage.Body.Left";
import CreatePageBodyRight from "./CreatePage.Body.Right";

function CreatePageBody() {
  return (
    <div className=" mb-4">
      <div>
        <p className="text-primary font-bold text-xl">BODY</p>
      </div>
      <div className="py-4 grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <CreatePageBodyLeft />
        </div>
        <div className="col-span-3">
          <CreatePageBodyRight />
        </div>
      </div>
    </div>
  );
}

export default CreatePageBody;
