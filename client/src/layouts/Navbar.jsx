import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div className="px-5 sm:px-[1vw] md:px-[3vw] lg:px-[5vw]">
      <div className="flex justify-between items-center py-5">
        <Link to="/">
          <img className="w-12 h-11 sm:w-20 sm:h-17 cursor-pointer" src="/logo.png" alt="" />
        </Link>
        <div className="flex space-x-5">
          <div>
            <Button />
          </div>
          <div className="flex gap-2 items-center">
            <img className="w-[20px] h-[20px] hidden sm:block" src={assets.star_icon} alt="" />
            <p className="hidden sm:block">AI-powered</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar
