import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="px-5 sm:px-[1vw] md:px-[3vw] lg:px-[5vw]">
      <div className="flex justify-between items-center py-5 mx-10">
        <Link to="/">
          <img className="w-20 h-17 cursor-pointer" src="/logo.png" alt="" />
        </Link>
        <div>
          <div className="flex gap-2">
            <img className="w-[20px]" src={assets.star_icon} alt="" />
            <p>AI-powered</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar
