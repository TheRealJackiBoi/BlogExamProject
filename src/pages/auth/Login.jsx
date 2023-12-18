import { useEffect } from 'react';
import { login, getToken } from './../../api/services/auth/auth.js'
import { Form, Link, redirect, useNavigate } from "react-router-dom";

export const action = async ({ request }) => {
  
  if (request.method !== "POST") {
    alert("Not allowed")
    return redirect(`/auth/login`);
  }    
  const data = await request.formData();
  console.log(data)
  if (data.get("username") === "" || data.get("password") === "") {
      alert("Please fill out all fields")
      return redirect(`/auth/login`);
  }

  const username = await data.get("username");
  const password = await data.get("password");
    
  let authorized = false
  const setAuthorized = (value) => {
    authorized = value
  }

  await login(username, password, setAuthorized)
  if (authorized) {
    const token = getToken()
    console.log(token)
    return redirect("/home")
  }
  alert("Invalid username or password")
  return redirect("/auth/login")
};


const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate("/home")
    }
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="h-fit bg-dat-white shadow-2xl px-10 py-10 text-center">
          <h1 className="text-1xl font-bold mb-10">Login</h1>
          <Form action='/auth/login' method='post' className="flex flex-col items-center">
            <label className="mb-2">
              <div className="text-left">Username</div>
              <input
                name="username"
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="text"
                placeholder="Username"
                required
              />
            </label>
            <label className="mb-2">
              <div className="text-left">Password</div>
              <input
                name="password"
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="password"
                placeholder="Password"
                required
              />
              <div className="text-right">
                <Link
                  className="text-dat-blue text-sm"
                  type="text"
                  to='/auth/signup'>
                  Sign up?
                </Link>
              </div>
            </label>
            <button
              className="bg-dat-blue text-dat-white px-20 py-3 rounded-full mt-4"
              type="submit">
              Login
            </button>
          </Form>
      </section>
    </div>
  );
};

export default Login;
