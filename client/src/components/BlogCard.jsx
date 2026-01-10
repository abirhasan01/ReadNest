import { useNavigate } from "react-router-dom";

const BlogCard = ({blog}) => {

    const { _id, title, description, category, image} = blog
    const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full bg-white rounded-lg overflow-hidden hover:scale-102 hover:shadow duration-300 cursor-pointer z-0"
    >
      <img className="aspect-video" src={image} alt="" />
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-[#5044E533] rounded-full text-[#5044E5] text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
}

export default BlogCard
