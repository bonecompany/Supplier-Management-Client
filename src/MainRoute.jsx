import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/admin.pages/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
import ProtectedAdminRoute from "./Authentications/ProtectedAdminRoute";
import AdminLoginProttect from "./Authentications/AdminLoginProttect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NotFound from "./pages/NotFound";
import Suppliers from "./pages/admin.pages/Suppliers";
import LatexParchase from "./pages/admin.pages/LatexParchase";
import DrcUpdation from "./pages/admin.pages/DrcUpdation";
import Drivers from "./pages/admin.pages/Drivers";
import Tapers from "./pages/admin.pages/Tapers";
import SupplierDetails from "./pages/admin.pages/SupplierDetails";
import TapperProfile from "./pages/admin.pages/TapperProfile";
import DriverProfile from "./pages/admin.pages/DriverProfile";


export const Axios = axios.create({
  baseURL: "https://supplier-management-server.onrender.com/api",
});


const MainRoute = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminSidebar />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/latex-parchase" element={<LatexParchase />} />
          <Route path="/admin/drc-updation" element={<DrcUpdation />} />
          <Route path="/admin/suppliers" element={<Suppliers />} />
          <Route path="/admin/drivers" element={<Drivers />} />
          <Route path="/admin/tapers" element={<Tapers />} />
          <Route
            path="/admin/supplier/:supplierId"
            element={
              <ProtectedAdminRoute>
              <SupplierDetails />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/tapper/:id"
            element={
              <ProtectedAdminRoute>
              <TapperProfile />
               </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/driver/:id"
            element={
              <ProtectedAdminRoute>
              <DriverProfile />
              </ProtectedAdminRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes >
    </>
  );
};

export default MainRoute;
