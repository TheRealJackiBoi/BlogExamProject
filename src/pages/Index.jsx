import logo from "../asserts/logo/logo.svg";
import { to } from "react-router-dom";


function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      <img src={logo} alt="Blogged logo" className="w-1/2 mb-8" />

      <h1 className="text-2xl font-bold mb-4">Login or signup</h1>
      <p className="mb-4">
        Are you ready to be blogged?
      </p>

      <button to="/login" className="bg-black text-white font-semibold py-2 px-16 rounded-full mb-2">Login</button>
      <p className="mb-2">or</p>
      <button to="/signup" className="bg-blue-500 text-white font-semibold py-2 px-16 rounded-full ">Signup</button>
      
    </div>
  );
}

export default Index;
