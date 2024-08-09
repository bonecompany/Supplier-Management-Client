import { Route, Routes } from "react-router-dom";
import AdminLogin from "../src/components/admin.components/AdminLogin";
import AdminSidebar from "./components/admin.components/AdminSidebar";
import AdminHome from "./pages/admin.pages/AdminHome";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Assemble from "./components/admin.components/Assemble";
import StatusCards from "./components/admin.components/StatusCards";

export const Axios = axios.create({
    baseURL: "http://localhost:3333/api"
})


const MainRoute = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<Assemble />}>
          <Route index element={<StatusCards/>} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;