"use client";
import { useRouter } from "next/navigation";
import React from "react";

function OneMenuItemComponent({ item }: any) {
  const router = useRouter();

  return (
    <ul className="space-y-2">
      <li>
        <button
          onClick={() => {
            router.push(item?.path);
          }}
        >
          {item?.label}
        </button>
      </li>
    </ul>
  );
}

export default OneMenuItemComponent;
