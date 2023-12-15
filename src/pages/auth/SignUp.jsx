import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  // Could potentially flip this to false for clarity, but I think it makes more sense
  // to have a big if statement rather than a big else statement
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [formComplete, setFormComplete] = useState(false);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  // npm install react-icons-kit
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSignup = () => {
    // Check if passwords are matching
    if (password === repeatPassword && formComplete) {
      // Add backend logic to create a new user
    } else {
      setPasswordMatch(false);
      setFormComplete(
        !!username && !!password && !!repeatPassword && !!securityQuestion
      );
    }
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
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400 mb-2"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() =>
                  setFormComplete(
                    !!username &&
                      !!password &&
                      !!repeatPassword &&
                      !!securityQuestion
                  )
                }
              />
            </label>
            <label className="mb-2 grid grid-cols-1">
              <div className="text-left">Password</div>
              <div className="relative">
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400 mb-2"
                type={type}
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onBlur={() =>
                  setFormComplete(
                    !!username &&
                      !!password &&
                      !!repeatPassword &&
                      !!securityQuestion
                  )
                }
              />
              <span
                class="absolute right-2 top-2 cursor-pointer"
                onClick={handleToggle}>
                <Icon icon={icon} size={20} />
              </span>
              </div>
            </label>
            <label className="mb-2 grid grid-cols-1">
              <div className="text-left">Repeat password</div>
              <div className="relative">
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400 mb-2"
                type={type}
                value={repeatPassword}
                placeholder="Repeat password"
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                  setPasswordMatch(true);
                }}
                onBlur={() =>
                  setFormComplete(
                    !!username &&
                      !!password &&
                      !!repeatPassword &&
                      !!securityQuestion
                  )
                }
              />
              <span
                class="absolute right-2 top-2 cursor-pointer"
                onClick={handleToggle}>
              </span>
              </div>
              {!passwordMatch && (
                <p className="text-dat-red text-sm">
                  Passwords do not match. Please try again.
                </p>
              )}
            </label>
            <label className="mb-2">
              <div className="text-left">Name of your first dog?</div>
              <input
                className="bg-dat-white border border-dat-black p-2 rounded w-60 shadow-md shadow-gray-400"
                type="text"
                value={securityQuestion}
                placeholder="Wilfred Woofenstein"
                onChange={(e) => setSecurityQuestion(e.target.value)}
                onBlur={() =>
                  setFormComplete(
                    !!username &&
                      !!password &&
                      !!repeatPassword &&
                      !!securityQuestion
                  )
                }
              />
            </label>
            <div>
              {/* The code below handles whether the signup button is faded out
              depending on form being filled out or not */}
              <button
                className={`bg-dat-blue text-dat-white px-20 py-3 rounded-full mt-8 ${
                  formComplete ? "" : "opacity-50 cursor-not-allowed"
                }`}
                type="button"
                onClick={handleSignup}
                disabled={!formComplete}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
