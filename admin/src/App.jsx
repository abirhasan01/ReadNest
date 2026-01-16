import "quill/dist/quill.snow.css"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer, Zoom } from "react-toastify"
import Login from "./components/Login"
import Navber from "./components/Navber"
import SideBar from "./components/SideBar"
import AddBlog from "./pages/AddBlog"
import BlogList from "./pages/BlogList"
import Dashboard from "./pages/Dashboard"

export const BackendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")

  useEffect(()=> {
    localStorage.setItem('token', token)
  },[token])

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navber setToken={setToken} />
          <hr />
          <div className="flex w-full bg-gray-100">
            <SideBar />
            <div className="w-[70%] ml-[3vw] my-10">
              <Routes>
                <Route path="/" element={<Dashboard token={token} />} />
                <Route path="/add" element={<AddBlog token={token} />} />
                <Route path="/list" element={<BlogList token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App
