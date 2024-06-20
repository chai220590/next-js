import { Link } from "@nextui-org/link";
import React from "react";

function OneMenuItemComponent({ item }: any) {
  return (
    <ul className="space-y-2">
      <li>
        <Link href={`/admin/${item?.path}`}>{item?.label}</Link>
      </li>
    </ul>
  );
}

export default OneMenuItemComponent;
