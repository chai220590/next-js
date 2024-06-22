"use client";
import useSetSearchParams from "@/services/hooks/set-search-params";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import OneMenuItemComponent from "./OneMenuItemComponent";
function AdminMenuComponent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const setSearchParams = useSetSearchParams(window);
  const pathname = usePathname();
  const [isShow, setIsShow] = useState({
    config: true,
    dashboard: true,
    settings: true,
    account: true,
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
    <div className="overflow-hidden pr-10">
      <nav>
        {(menuItems() || []).map((item, index) => (
          <OneMenuItemComponent item={item} key={`${index}`} />
        ))}
      </nav>
    </div>
  );
}

export default AdminMenuComponent;
