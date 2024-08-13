import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/admin.pages/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
import ProtectedAdminRoute from "./Authentications/ProtectedAdminRoute";
import RedirectIfAuthenticated from "./Authentications/RedirectIfAuthenticated";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NotFound from "./pages/NotFound";

export const Axios = axios.create({
  baseURL: "http://localhost:3333/api",
});

const MainRoute = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/admin-login"
          element={
            <RedirectIfAuthenticated>
              <AdminLogin />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminSidebar />
            </ProtectedAdminRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedAdminRoute>
                <AdminHome />
              </ProtectedAdminRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default MainRoute;
