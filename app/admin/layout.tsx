"use client";
import React from "react";
import AdminAuth from "./components/AdminAuth";
import ConfirmLogoutModal from "./components/ConfirmLogoutModal";
import AdminMenuComponent from "./components/admin-menu/AdminMenuComponent";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuth>
      <div className="flex bg-white">
        <div className="w-[300px] relative bg-white">
          <div className="fixed top-[66px] overflow-hidden">
            <AdminMenuComponent />
          </div>
        </div>
        <div
          className={`flex-1 bg-white transition-transform transform fade-in-up`}
        >
          {children}
        </div>
      </div>
      <ConfirmLogoutModal />
    </AdminAuth>
  );
}

export default AdminLayout;
