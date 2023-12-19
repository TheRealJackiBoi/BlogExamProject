import { useNavigate } from "react-router";
import logo from "./../../assets/logo.svg"
import { logout } from "./../../api/services/auth/auth.js";
import { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

// get setLoggedIn and loggedIn from props
const NavBar = ({ loggedIn, setLoggedIn}) => {

    const navigate = useNavigate()


    useEffect(() => {
    }, [loggedIn])

    return (
        <div className="flex justify-between items-center w-screen bg-dat-olive">
            <img
                id="navlogo"
                src={logo}
                alt="Blogged logo"
                className="w-12 hover:cursor-pointer"
                onClick={() => {loggedIn ? navigate("/home") : navigate("/")}}
            />
            { loggedIn ? (
                <form id="searchprofiles" className="flex items-center">
                    <input
                        type="text"
                        className="bg-dat-white border border-dat-black pl-2 rounded-full w-60 h-8 shadow-md shadow-gray-400"
                        placeholder="Search..."
                    />
                </form>
                ) : (<></>)
            }
                { !loggedIn ? (

            <div id="navbuttons" className="">

                <NavLink to="/login">Login</NavLink>
                <NavLink to="/login">Sign Up</NavLink>

            </div>
                ) : (
                    <div id="navbuttons" className="">

                        <NavLink to="/" onClick={() => logout(setLoggedIn)}>Logout</NavLink>

                    </div>
                )
                }
        </div>

    );
}

export default NavBar;