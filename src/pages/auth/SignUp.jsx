import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");

  const handleSignup = () => {
    // Add backend logic to create a new user
    // Currently just testing in browser console
    console.log("Signing up with:", username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="logo" className="w-60 mb-4" />
      <section className="h-fit bg-dat-white shadow-2xl px-10 py-10">
        <div className="text-center">
          <h1 className="text-1xl font-bold mb-5">Sign up</h1>
          <h3 className="text-sm mb-5">
            We are excited to have you <br></br> join the Blogged community!
          </h3>
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
            </label>
            <label className="mb-2">
              <div className="text-left">Repeat password</div>
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="password"
                value={password}
                placeholder="Repeat password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="mb-2">
              <div className="text-left">Name of your first dog?</div>
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="password"
                value={password}
                placeholder="Wilfred Woofenstein"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button
                className="bg-dat-blue text-dat-white px-20 py-3 rounded-full"
                type="button"
                onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
