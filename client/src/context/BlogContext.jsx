import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogContext = createContext()

export const BlogContextProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [blogList, setBlogList] = useState([])
  const [singleData, setSingleData] = useState(null);


    const fetchAllBlogs = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/blog/all");
            if (data.success) {
              setBlogList(data.allBlogs);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const fetchSingleBlogData = async (id) => {
      const { data } = await axios.get(backendUrl + `/api/blog/single/${id}`);
      setSingleData(data.blog);
    };

    useEffect(()=> {
        fetchAllBlogs()
    },[])

    const value = {
        backendUrl,
        fetchAllBlogs,
        blogList, setBlogList,
        fetchSingleBlogData, singleData, setSingleData
    }
    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext