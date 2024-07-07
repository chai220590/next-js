"use client";
import useSetSearchParams from "@/services/hooks/set-search-params";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import OneMenuItemComponent from "./OneMenuItemComponent";
function AdminMenuComponent() {
  const router = useRouter();
  const setSearchParams = useSetSearchParams(window);
  const pathname = usePathname();
  const [isShow, setIsShow] = useState({
    post: true,
    config: true,
    dashboard: true,
    settings: true,
    account: true,
    product: true,
  });

  const menuItems = useCallback(() => {
    return [
      {
        label: "Dashboard",
        onClick: () => {
          setIsShow({
            ...isShow,
            dashboard: !isShow.dashboard,
          });
        },
        children: isShow?.dashboard
          ? [
              {
                label: "Trang chủ",
                path: "/admin",
                onClick: () => {
                  router.push("/admin");
                },
              },
            ]
          : [],
      },
      {
        label: "Bài viết",
        onClick: () => {
          setIsShow({
            ...isShow,
            post: !isShow.post,
          });
        },
        children: isShow?.post
          ? [
              {
                label: "Viết bài",
                path: "/admin/post/create",
                onClick: () => {
                  router.push("/admin/post/create");
                },
              },
              {
                label: "Danh sách bài viết",
                path: "/admin/post/list",
                onClick: () => {
                  router.push("/admin/post/list");
                },
              },
            ]
          : [],
      },
      {
        label: "Sản phẩm",
        onClick: () => {
          setIsShow({
            ...isShow,
            product: !isShow.product,
          });
        },
        children: isShow?.product
          ? [
              {
                label: "Danh sách sản phẩm",
                path: "/admin/product/list",
                onClick: () => {
                  router.push("/admin/product/list");
                },
              },
              {
                label: "Tạo sản phẩm",
                path: "/admin/product/create",
                onClick: () => {
                  router.push("/admin/product/create");
                },
              },
            ]
          : [],
      },
      {
        label: "Cấu hình",
        onClick: () => {
          setIsShow({
            ...isShow,
            config: !isShow.config,
          });
        },
        children: isShow?.config
          ? [
              {
                label: "Trang chủ",
                path: "/admin/configuration/home",
                onClick: () => {
                  router.push("/admin/configuration/home");
                },
              },
              {
                label: "Giới thiệu",
                path: "/admin/configuration/about",
                onClick: () => {
                  router.push("/admin/configuration/about");
                },
              },
            ]
          : [],
      },
      {
        label: "Cài đặt chung",
        onClick: () => {
          setIsShow({
            ...isShow,
            settings: !isShow.settings,
          });
        },
        children: isShow?.settings
          ? [
              {
                label: "Hệ thống",
                path: "/admin/settings/system",
                onClick: () => {
                  router.push("/admin/settings/system");
                },
              },
              {
                label: "Sản phẩm",
                path: "/admin/settings/product",
                onClick: () => {
                  router.push("/admin/settings/product");
                },
              },
            ]
          : [],
      },
      {
        label: "Tài khoản",
        onClick: () => {
          setIsShow({
            ...isShow,
            account: !isShow.account,
          });
        },
        children: isShow.account
          ? [
              {
                label: "Thay đổi mật khẩu",
                onClick: () => {},
              },
              {
                label: "Đăng xuất",
                onClick: () => {
                  setSearchParams("confirm-logout", true);
                },
              },
            ]
          : [],
      },
    ];
  }, [isShow, pathname]);

  return (
    <div className="overflow-hidden pr-10 w-[320px]">
      <nav>
        {(menuItems() || []).map((item, index) => (
          <OneMenuItemComponent item={item} key={`${index}`} />
        ))}
      </nav>
    </div>
  );
}

export default AdminMenuComponent;
