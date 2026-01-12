import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";


const AddBlog = () => {

  const editorRef = useRef(null)
  const quillRef = useRef(null)
  const [image, setImage] = useState(false)
  const [isPublished, setIsPublished] = useState(false)

  useEffect(()=>{
    // initiate Quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: "snow"})
    }
  },[])

  return (
      <form className="bg-white max-w-3xl p-4 md:p-10 rounded-xl text-gray-500 overflow-y-scroll">
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
        />

        <p className="mt-4">Sub title</p>
        <input
          className="w-full max-w-lg py-2 px-3 my-2 border border-gray-300 outline-none rounded"
          type="text"
          placeholder="Type here"
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
