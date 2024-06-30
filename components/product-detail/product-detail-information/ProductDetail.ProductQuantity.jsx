"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

function ProductDetailProductQuantity({ quantity, onSetQuantity }) {
  return (
    <div className="flex gap-2">
      <Button
        isIconOnly
        onClick={() => {
          onSetQuantity(quantity - 1);
        }}
      >
        <MinusIcon className="size-4" />
      </Button>
      <Input
        value={quantity}
        onChange={(e) => onSetQuantity(Number(e.target.value))}
        classNames={{
          input: "text-center",
        }}
        className="w-[100px]"
      />
      <Button
        isIconOnly
        onClick={() => {
          onSetQuantity(quantity + 1);
        }}
      >
        <PlusIcon className="size-4" />
      </Button>
    </div>
  );
}

export default ProductDetailProductQuantity;
