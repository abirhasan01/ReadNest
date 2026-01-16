import axios from "axios";
import { toast } from "react-toastify";
import { BackendUrl } from "../App";
import { assets } from "../assets/assets";

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const { title, createdAt, _id} = blog
    const blogDate = new Date(createdAt).toDateString()
    
    const removeData = async (id) => {
      try {
        const { data } = await axios.post(BackendUrl + "/api/blog/remove", {
          id,
        });
        if (data.success) {
          toast.success(data.message);
          fetchBlogs();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    };
     const updateToggle = async (id) => {
      try {
        const { data } = await axios.put(
          BackendUrl + "/api/blog/update-toggle",
          { id },
        );
        if (data.success) {
          toast.success(data.message);
          fetchBlogs()
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }


  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className="px-2 py-4 flex text-xs gap-3 flex-col items-center sm:flex-row sm:items-start">
        <button onClick={()=> updateToggle(_id)} className="border px-2 py-1 mt-1 rounded cursor-pointer">
          {blog.isPublished ? "Unpublish" : "Published"}
        </button>
        <img onClick={()=>removeData(_id)} className="w-8 h-8 cursor-pointer" src={assets.dashboard_icon} alt="" />
      </td>
    </tr>
  );
}

export default BlogTableItem
