import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5 mx-10">
        <Link to="/">
          <h2 className="text-2xl">Logo</h2>
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
