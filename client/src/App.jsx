import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {

  return (
    <div className="px-5 sm:px-[2vw] md:px-[5vw] lg:px-[7vw] min-h-screen bg-gradient-to-br from-purple-100 to-teal-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App