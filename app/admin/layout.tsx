import React from "react";
import AdminAuth from "./components/AdminAuth";
import ConfirmLogoutModal from "./components/ConfirmLogoutModal";
import AdminMenuComponent from "./components/admin-menu/AdminMenuComponent";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuth>
      <div className="grid grid-cols-4 bg-white">
        <div className="col-span-1 relative bg-white">
          <div className="fixed top-[64px] overflow-hidden">
            <AdminMenuComponent />
          </div>
        </div>
        <div className="col-span-3 bg-white">{children}</div>
      </div>
      <ConfirmLogoutModal />
    </AdminAuth>
  );
}

export default AdminLayout;
