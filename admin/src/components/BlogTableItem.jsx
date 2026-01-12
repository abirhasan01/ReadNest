import { assets } from "../assets/assets";

const BlogTableItem = ({blog, fetchBlogs, index}) => {
    const { title, createdAt} = blog
    const blogDate = new Date(createdAt)
  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>
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
        <button className="border px-2 py-1 mt-1 rounded cursor-pointer">
          {blog.isPublished ? "Unpublish" : "Published"}
        </button>
        <img className="w-8 h-8" src={assets.dashboard_icon} alt="" />
      </td>
    </tr>
  );
}

export default BlogTableItem
