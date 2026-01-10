
const NewsLetterBox = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pb-20">
      <h1 className="text-2xl font-medium">Never Miss a Blog!</h1>
      <p className="text-gray-500 my-3">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form className="bg-gray-100 my-5 sm:w-lg w-full flex items-center rounded-full gap-3 pl-5">
        <input
          type="text"
          className="flex-1 outline-none pl-5"
          placeholder="Enter your email id"
        />
        <button className="py-3 px-5 m-1 bg-black text-gray-100 rounded-full cursor-pointer hover:scale-102 transition-all">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox
