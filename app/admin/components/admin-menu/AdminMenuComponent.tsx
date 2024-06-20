import React from "react";
import OneMenuItemComponent from "./OneMenuItemComponent";

function AdminMenuComponent() {
  const menuItems = [
    {
      label: "aaasdas asd asd asasda",
      path: "aaa",
      icon: "ok",
    },
    {
      label: "aasda sds dasddaa",
      path: "aaa",
      icon: "ok",
    },
    {
      label: "aasdas d asdasaa",
      path: "aaa",
      icon: "ok",
    },
  ];

  return (
    <div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <OneMenuItemComponent item={item} key={`${index}`} />
        ))}
      </nav>
    </div>
  );
}

export default AdminMenuComponent;
