import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import React from "react";

function CreatePageFooter() {
  return (
    <div className=" mb-4">
      <div className="flex items-center gap-4">
        <div>
          <p className="text-primary font-bold text-xl">FOOTER</p>
        </div>
        <Button isIconOnly variant="light">
          <PlusCircleIcon className="size-6 text-primary" />
        </Button>
      </div>
    </div>
  );
}

export default CreatePageFooter;
