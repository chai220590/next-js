import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import React from "react";

function CreatePageBodyRight() {
  return (
    <div>
      <p className="mb-2 text-sm text-default-400">Right</p>
      <div className="rounded-lg border-dotted hover:border-solid transform transition-transform border-primary border-1">
        <Button isIconOnly variant="light" className="w-full">
          <PlusCircleIcon className="size-6 text-primary" />
        </Button>
      </div>
    </div>
  );
}

export default CreatePageBodyRight;
