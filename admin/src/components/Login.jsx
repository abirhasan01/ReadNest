
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-indigo-500 shadow-2xl shadow-indigo-200 rounded-2xl p-5">
        <h2 className="text-3xl font-bold text-center mt-6">
          <span className="text-indigo-700">Admin</span> Login
        </h2>
        <p className="w-xs text-center mb-10">
          Enter your credentials to access the admin panel
        </p>
        <form>
          <div className="flex flex-col text-gray-600">
            <label htmlFor="email">Email</label>
            <input
              className="outline-none border-b-2 border-gray-300 pl-2 pb-1 my-2"
              type="email"
              placeholder="your email id"
            />
          </div>
          <div className="flex flex-col my-3 text-gray-600">
            <label htmlFor="password">Password</label>
            <input
              className="outline-none border-b-2 border-gray-300 pl-2 pb-1 my-2"
              type="password"
              placeholder="your password"
            />
          </div>
          <button
            className="w-full bg-[#5044E5] text-white text-sm py-3 rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
