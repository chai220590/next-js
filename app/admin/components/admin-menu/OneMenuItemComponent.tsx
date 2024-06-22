"use client";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
function OneMenuItemComponent({ item }: any) {
  const pathname = usePathname();

  return (
    <ul>
      <li>
        <button
          className="w-full flex justify-between items-center p-4 hover:bg-[#E5E5E620] hover:scale-105 transition-transform transform"
          onClick={item?.onClick}
        >
          <span
            className={`font-medium ${pathname === item?.path ? "text-blue-500" : "text-black-100"}`}
          >
            {item?.label}
          </span>
          {item?.children !== undefined ? (
            <div className="transition-transform transform">
              {(item?.children || []).length > 0 ? (
                <div>
                  <ChevronDownIcon className="size-4" />
                </div>
              ) : (
                <div>
                  <ChevronRightIcon className="size-4" />
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </button>
        {(item?.children || []).map((x: any, index: any) => {
          return (
            <button
              key={`${index}`}
              className="ml-2 w-full flex items-center p-2 hover:bg-[#E5E5E620] hover:scale-105 transition-transform transform"
              onClick={x?.onClick}
            >
              <div className="mr-2">
                <MinusIcon className="size-4" />
              </div>
              <span
                className={`${pathname === x?.path ? "text-blue-500 font-medium" : "text-black-100"}`}
              >
                {x?.label}
              </span>
            </button>
          );
        })}
      </li>
    </ul>
  );
}

export default OneMenuItemComponent;
