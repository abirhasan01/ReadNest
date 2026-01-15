import axios from "axios";
import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { BackendUrl } from "../App";
import { assets } from "../assets/assets";


const AddBlog = ({ token }) => {

  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const [image, setImage] = useState(false)
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("All")
  const [isPublished, setIsPublished] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      image && formData.append("image", image)

      formData.append("title", title)
      formData.append("subTitle", subTitle);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("isPublished", isPublished);

      const res = await axios.post(BackendUrl + "/api/blog/add-blog", formData, {headers: {token}});
      if(res.data.success){
        toast.success(res.data.message)
        setImage("")
        setTitle("")
        setSubTitle("")
        setDescription("")
        setCategory("")
        setIsPublished("")
      } else {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    // initiate Quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: "snow"})
    }
    quillRef.current.on("text-change", ()=> {
      const html = editorRef.current.querySelector(".ql-editor").innerHTML;
      setDescription(html)
    })
  },[])

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-3xl p-4 md:p-10 rounded-xl text-gray-500 overflow-y-scroll"
    >
      <p className="mb-3">Upload thumbnail</p>
      <label htmlFor="image">
        <img
          className="h-16 cursor-pointer rounded"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          alt=""
        />
        <input
          onChange={(e) => setImage(e.target.files[0])}
          hidden
          className="w-3.5"
          type="file"
          name="image"
          id="image"
        />
      </label>
      <p className="mt-4">Blog title</p>
      <input
        className="w-full max-w-lg py-2 px-3 my-2 border border-gray-300 outline-none rounded"
        type="text"
        placeholder="Type here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <p className="mt-4">Sub title</p>
      <input
        className="w-full max-w-lg py-2 px-3 my-2 border border-gray-300 outline-none rounded"
        type="text"
        placeholder="Type here"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
      />

      <p className="mt-4">Blog Description</p>
      <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
        <div ref={editorRef}></div>
        <button
          className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
          type="button"
        >
          Generate with AI
        </button>
      </div>

      <p className="mt-4">Blog category</p>
      <select
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
      >
        <option value="">Select category</option>
        <option value="All">All</option>
        <option value="Technology">Technology</option>
        <option value="Startup">Startup</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Finance">Finance</option>
      </select>

      <div className="flex gap-2 mt-4">
        <p>Publish Now</p>
        <input
          type="checkbox"
          checked={isPublished}
          className="scale-125 cursor-pointer"
          onChange={(e) => setIsPublished(e.target.checked)}
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-40 h-10 text-white bg-[#5044E5] rounded cursor-pointer text-sm"
      >
        Add Blog
      </button>
    </form>
  );
}

export default AddBlog
