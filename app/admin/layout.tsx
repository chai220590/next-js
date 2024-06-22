import React from "react";
import AdminAuth from "./components/AdminAuth";
import ConfirmLogoutModal from "./components/ConfirmLogoutModal";
import AdminMenuComponent from "./components/admin-menu/AdminMenuComponent";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuth>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <AdminMenuComponent />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
      <ConfirmLogoutModal />
    </AdminAuth>
  );
}

export default AdminLayout;
