import Blogs from "../components/Blogs";
import Header from "../components/header";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div className="px-5 sm:px-[1vw] md:px-[3vw] lg:px-[5vw]">
      <Header />
      <Blogs />
      <NewsLetterBox />
    </div>
  );
}

export default Home
