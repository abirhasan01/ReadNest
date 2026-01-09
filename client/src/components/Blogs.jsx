import { motion } from "motion/react";
import { useState } from "react";
import { blogCategory } from "../assets/assets";

const Blogs = () => {

    const [search, setSearch] = useState("")
    const [menu, setMenu] = useState("All")

  return (
    <div className="mt-10 flex justify-center items-center flex-col">
      <form className="bg-white w-full sm:w-1/2 flex items-center gap-3 pl-10 rounded-full">
        <input
          className="w-full sm:flex-1 outline-none"
          type="text"
          placeholder="Search blogs"
        />
        <button className="bg-black text-white px-10 py-3.5 m-1 rounded-full cursor-pointer hover:scale-102 transition-all">
          Search
        </button>
      </form>

      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap">
        {blogCategory.map((item, index) => (
          <div className="relative" key={index}>
            <button
              className={`cursor-pointer text-gray-500 relative z-10 ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
              onClick={() => setMenu(item)}
            >
              {item}
            </button>
            {menu === item && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-0 left-0 right-0 h-7 z-0 bg-purple-500 rounded-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
