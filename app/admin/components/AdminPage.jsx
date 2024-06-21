import React from "react";
import AdminMenuComponent from "./admin-menu/AdminMenuComponent";
import ConfirmLogoutModal from "./ConfirmLogoutModal";
function AdminPage() {
  return (
    <div className="grid grid-cols-4">
      <ConfirmLogoutModal />
      <div className="col-1">
        <AdminMenuComponent />
      </div>
      <div className="col-3">aaa</div>
    </div>
  );
}

export default AdminPage;
