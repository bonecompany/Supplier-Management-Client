import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" h-screen flex items-center">
      <div className="h-[90%] w-[95%] mx-auto rounded-3xl shadow-lg lg:flex flex-col md:flex-row md:justify-between lg:bg-rubberTreeDesktop bg-rubberTreeMobile bg-no-repeat lg:bg-contain bg-cover bg-center lg:bg-left">
        <div className="flex-1"></div>
        <div className="flex-1 bg-[#CCD1CD] rounded-r-3xl flex justify-center items-center">
          <div className="w-96 bg-slate-50 p-4 rounded-2xl shadow-md">
            <h1 className="text-3xl font-bold text-center text-cyan-900 border-b-2 border-cyan-900 p-2">
              Admin Login
            </h1>
            <form className="my-4 p-2 flex flex-col justify-evenly ">
              <label htmlFor="username" className="text-cyan-900 font-medium ">
                Username
              </label>
              <input
                className="px-2 py-1 border-2 outline-none rounded-md shadow appearance-none"
                type="text"
                id="username"
                placeholder="Username"
              />
              <label
                htmlFor="password"
                className="text-cyan-900 font-medium mt-2"
              >
                Password
              </label>
              <div className="flex justify-between items-center border-2 pr-2 rounded-md shadow appearance-none">
                <input
                  className="px-2 py-1 outline-none rounded-md w-3/4 bg-slate-50"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder={showPassword ? "Password" : "*********"}
                />
                <span className="text-2xl cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
              <button className="shadow w-full py-2 my-4 bg-cyan-900 text-white text-xl rounded-md font-medium">
                Login
              </button>
              {/* <Link to={"#"}>Forgot Password</Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
