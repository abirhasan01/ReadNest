import Blogs from "../components/Blogs";
import Head from "../components/Head";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div className="px-5 sm:px-[1vw] md:px-[3vw] lg:px-[5vw]">
      <Head />
      <Blogs />
      <NewsLetterBox />
    </div>
  );
}

export default Home
