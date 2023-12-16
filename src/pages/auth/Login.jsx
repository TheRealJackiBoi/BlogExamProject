import { useState } from "react";
import logo from "../../assets/logo.svg";
import { login, getToken } from './../../api/services/auth/auth.js'
import { redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add backend logic to sign in a user
    // Currently just testing in browser console
    console.log("Logging in with:", username, password);
    login(username, password)
    console.log(getToken())
  };

  const handleSignup = () => {
    // Add backend logic to create a new user
    // Currently just testing in browser console
    console.log("Going to signup page")
    redirect("/signup")
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <img src={logo} alt="logo" className="w-60 mb-4" />
      <section className="h-fit bg-dat-white shadow-2xl px-10 py-10">
        <div className="text-center">
          <h1 className="text-1xl font-bold mb-10">Login</h1>
          <form className="flex flex-col items-center">
            <label className="mb-2">
              <div className="text-left">Username</div>
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="mb-2">
              <div className="text-left">Password</div>
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-right">
                <button
                  className="text-dat-blue text-sm"
                  type="text"
                  onClick={handleSignup}>
                  Sign up?
                </button>
              </div>
            </label>
            <button
              className="bg-dat-blue text-dat-white px-20 py-3 rounded-full mt-4"
              type="button"
              onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
