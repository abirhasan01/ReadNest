import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BackendUrl } from "../App";
import { assets } from "../assets/assets";
import BlogTableItem from "../components/BlogTableItem";

const Dashboard = () => {

  const [DashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  });

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get(BackendUrl + "/api/admin/dashboard");
      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(()=> {
    fetchDashboardData()
  },[])

  return (
    <div>
      {/* dashboard data */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center min-w-30 sm:min-w-58 gap-4 p-4 bg-white rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-8 sm:w-15" src={assets.dashboardBlogList} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-500">
              {DashboardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>
        <div className="flex items-center min-w-30 sm:min-w-58 gap-4 p-4 bg-white rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-8 sm:w-15" src={assets.comment_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-500">
              {DashboardData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>
        <div className="flex items-center min-w-30 sm:min-w-58 gap-4 p-4 bg-white rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img className="w-8 sm:w-15" src={assets.dashboardDraft_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-500">
              {DashboardData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>

      {/* Latest Blogs */}
      <div className="">
        <div className="flex items-center m-4 mt-6 gap-3 text-gray-600">
          <img className="w-6" src={assets.dashboardList} alt="" />
          <p>Latest Blogs</p>
        </div>

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
              {DashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={index}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
