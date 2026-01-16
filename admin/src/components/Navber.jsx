import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Navber = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center mx-5 md:mx-[5vw] py-5">
      <NavLink to="/" className="text-3xl cursor-pointer">Logo</NavLink>
      <button
        onClick={() => {
          setToken("");
          localStorage.removeItem("token");
          toast.success("Logout successful");
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Navber
