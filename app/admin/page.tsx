import AdminAuth from "./components/AdminAuth";
import AdminPage from "./components/AdminPage";
function Admin() {
  return (
    <AdminAuth>
      <AdminPage />
    </AdminAuth>
  );
}

export default Admin;
