import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BackendUrl } from "../App";
import BlogTableItem from "../components/BlogTableItem";

const BlogList = () => {

  const [blogList, setBlogList] = useState([])

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(BackendUrl + "/api/blog/list");
      if (data.success) {
        setBlogList(data.allBlog);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=> {
    fetchBlogs()
  },[])

  return (
    <div>
      <p className="text-gray-600 my-3">Blog List</p>
      <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th scope="col" className="px-2 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-2 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogList.map((blog, index) => {
              return (
                <BlogTableItem
                  key={index}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogList
