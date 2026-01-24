import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="sm:w-[20%] w-[10%] min-h-screen border-r bg-white">
      <div className="flex flex-col pt-6 text-[15px]">
        <NavLink
          to="/"
          className="flex items-center justify-center sm:justify-start gap-2 pl-[10%] py-2 text-gray-600"
        >
          <img className="w-6 h-6" src={assets.dashboard_icon} alt="" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink
          to="/add"
          className="flex items-center justify-center sm:justify-start gap-2 pl-[10%] py-2 text-gray-600"
        >
          <img className="w-6 h-6" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add blogs</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center justify-center sm:justify-start gap-2 pl-[10%] py-2 text-gray-600"
        >
          <img className="w-6 h-6" src={assets.list_icon} alt="" />
          <p className="hidden md:block">Blogs list</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar
