import { useEffect } from 'react';
import { login, getToken } from './../../api/services/auth/auth.js'
import { Link, useNavigate, useOutletContext} from "react-router-dom";

// get setLoggedIn and loggedIn from props
const Login = () => {

  const navigate = useNavigate();
  
  const {setLoggedIn} = useOutletContext();

 

  const handleSubmit = async ( request ) => {
    
    const data = new FormData(request.target);

    if (data.get("username") === "" || data.get("password") === "") {
        alert("Please fill out all fields")
        navigate(`/auth/login`);
    }
  
    const username = data.get("username");
    const password = data.get("password");
      
    const token = await login(username, password)

    if(token) {
      setLoggedIn(true);
      console.log("logged in")
      navigate("/home");
    }
    else {
      console.error("Login failed");
      alert("Login failed, try again")
      navigate("/auth/login");
    }
    
    
  };

  useEffect(() => {
    if (getToken()) {
      navigate("/home")
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="h-fit bg-dat-white shadow-2xl px-10 py-10 mt-16 text-center">
          <h1 className="text-1xl font-bold mb-10">Login</h1>
          <form className="flex flex-col items-center" onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
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
          </form>
      </section>
    </div>
  );
};

export default Login;
