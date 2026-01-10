import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-20">
      <div className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#5044E51A] text-[#5044E5] text-sm">
        <p>New: AI feature integrated</p>
        <img className="w-[18px]" src={assets.star_icon} alt="" />
      </div>
      <h1 className="text-4xl sm:text-6xl max-w-[300px] sm:max-w-[600px] my-5">
        AI-powered <span className="text-blue-600">blogging</span> platform.
      </h1>
      <p className="max-w-[740px] text-sm">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it’s one word or a thousand, your story
        starts right here.
      </p>
    </div>
  );
}

export default Header;
