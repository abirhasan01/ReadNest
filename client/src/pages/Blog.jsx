import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import BlogContext from "../context/BlogContext"

const Blog = () => {

  const { id } = useParams()
  const { fetchSingleBlogData, singleData } = useContext(BlogContext);

  useEffect(()=> {
    fetchSingleBlogData(id);
  },[])


  return singleData ? (
    <div className="px-5 sm:px-[1vw] md:px-[3vw] lg:px-[5vw] mt-20 flex justify-center items-center flex-col pb-40">
      <h1 className="text-2xl md:text-4xl font-semibold text-center md:w-[550px]">
        {singleData.title}
      </h1>
      <p className="text-gray-500 my-5">{singleData.title}</p>
      <p className="px-5 py-2 bg-[#5044E5]/10 text-[#5044E5] text-sm border-[#5044E5] border-1 rounded-full">
        Michael Brown
      </p>
      <img className="w-5xl rounded-4xl mt-10 mb-10" src={singleData.image} alt="" />
      <div
        className="description-text max-w-3xl mx-auto"
        dangerouslySetInnerHTML={{ __html: singleData.description }}
      ></div>
    </div>
  ) : (
    <div>Loading....</div>
  );
}

export default Blog
