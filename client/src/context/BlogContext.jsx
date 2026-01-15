import { createContext, useState } from "react";

const BlogContext = createContext()

export const BlogContextProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [blogList, setBlogList] = useState([])

    const fetchAllBlogs = async () => {
         
    }

    const value = {}
    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext