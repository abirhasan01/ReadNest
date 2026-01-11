import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[20%] min-h-screen border-r-1">
      <div className="flex flex-col pt-6 text-[15px]">
        <NavLink to="/" className="flex items-center gap-2 pl-[10%] py-2 text-gray-600">
          <img className="w-7 h-7" src={assets.dashboard_icon} alt="" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>
        <NavLink to="/add" className="flex items-center gap-2 pl-[10%] py-2 text-gray-600">
          <img className="w-7 h-7" src={assets.dashboard_icon} alt="" />
          <p className="hidden md:block">Add blogs</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-2 pl-[10%] py-2 text-gray-600">
          <img className="w-7 h-7" src={assets.dashboard_icon} alt="" />
          <p className="hidden md:block">Blogs list</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar
