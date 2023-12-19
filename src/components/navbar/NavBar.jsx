import { useNavigate } from "react-router";
import logo from "./../../assets/logo.svg"
import { logout } from "./../../api/services/auth/auth.js";
import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { getToken, getUsername } from "./../../api/services/auth/auth.js";
// get setLoggedIn and loggedIn from props
const NavBar = ({ loggedIn, setLoggedIn}) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")

    useEffect(() => {
        const token = getToken()
        if (token) {
            setUsername(getUsername())

        }
    }, [loggedIn])

    return (
        <div className="flex justify-between items-center w-screen bg-dat-olive">
            <img
                id="navlogo"
                src={logo}
                alt="Blogged logo"
                className="w-6 m-2 hover:cursor-pointer"
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
            <div id="navbuttons" className="flex felx-row justify-between  mr-2">

                { !loggedIn ? (
                <>
                    <NavLink to="/auth/login" className="block m-2">Login</NavLink>
                    <NavLink to="/auth/signup" className="block m-2">Sign Up</NavLink>
                </>
                ) : (
                <>
                    <NavLink to="/" className="block m-2" >{ username }</NavLink>
                    <NavLink to="/" className="block m-2">New Post</NavLink>
                    <NavLink to="/" className="block m-2" onClick={() => logout(setLoggedIn)}>Logout</NavLink>
                </>
                )
                }
                </div>
        </div>

    );
}

export default NavBar;