import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Navber from "./components/Navber"
import SideBar from "./components/SideBar"
import AddBlog from "./pages/AddBlog"
import BlogList from "./pages/BlogList"
import Dashboard from "./pages/Dashboard"

function App() {

  const [token, setToken] = useState(true)

  return (
    <div>
      {token === "" ? (
        <Login />
      ) : (
        <>
          <Navber />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add" element={<AddBlog />} />
                <Route path="/list" element={<BlogList />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App
