import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { BackendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BackendUrl + "/api/admin/login", {email, password});
      if(res.data.success){
        setToken(res.data.token)
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-indigo-500 shadow-2xl shadow-indigo-200 rounded-2xl p-5">
        <h2 className="text-3xl font-bold text-center mt-6">
          <span className="text-indigo-700">Admin</span> Login
        </h2>
        <p className="w-xs text-center mb-10">
          Enter your credentials to access the admin panel
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-gray-600">
            <label htmlFor="email">Email</label>
            <input
              className="outline-none border-b-2 border-gray-300 pl-2 pb-1 my-2"
              type="email"
              placeholder="your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-3 text-gray-600">
            <label htmlFor="password">Password</label>
            <input
              className="outline-none border-b-2 border-gray-300 pl-2 pb-1 my-2"
              type="password"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-[#5044E5] text-white text-sm py-3 rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login
