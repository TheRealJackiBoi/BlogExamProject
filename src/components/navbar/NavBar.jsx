import { useNavigate } from "react-router";
import logo from "./../../assets/logo.svg"
import { logout } from "./../../api/services/auth/auth.js";
import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { getToken, getUsername } from "./../../api/services/auth/auth.js";
import {menu3} from 'react-icons-kit/icomoon/menu3'
import { Icon } from "react-icons-kit";


// get setLoggedIn and loggedIn from props
const NavBar = ({ loggedIn, setLoggedIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setUsername(getUsername());
        }
    }, [loggedIn]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        // Initial check for screen size
        handleResize();

        // Event listener for screen size changes
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex justify-between items-center w-screen bg-dat-olive">
            <img
                id="navlogo"
                src={logo}
                alt="Blogged logo"
                className="w-6 m-2 hover:cursor-pointer"
                onClick={() => {
                    loggedIn ? navigate("/home") : navigate("/");
                }}
            />

                <form id="searchprofiles" className="flex items-center">
                    <input
                        type="text"
                        className="bg-dat-white border border-dat-black pl-2 rounded-full w-60 h-8 shadow-md shadow-gray-400"
                        placeholder="Search..."
                    />
                </form>
            {loggedIn && isSmallScreen && (
                <div
                    id="burgerMenu"
                    className="m-2 cursor-pointer"
                    onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
                >
                    <Icon icon={menu3}></Icon>
                </div>
            )}
            <div
                id="navbuttons"
                className={`${
                    isSmallScreen ? (!burgerMenuOpen ? "hidden" : " bg-dat-olive absolute top-10 right-1 flex flex-col z-10 divide-y divide-dat-white rounded-lg shadow min-w-[8rem] ") : "flex flex-row justify-between items-end mr-2"
                } `}
            >
                {!loggedIn ? (
                    <>
                        <NavLink to="/auth/login" className="">
                            Login
                        </NavLink>
                        <NavLink to="/auth/signup" className="">
                            Sign Up
                        </NavLink>
                    </>
                ) : (
                    <>  
                    <div className="px-2 py-1">
                        <NavLink to="/" className="">
                            {username}
                        </NavLink>
                    </div>
                    <div className="flex flex-col px-2 py-1">
                        <NavLink to="/" className="">
                            New Post
                        </NavLink>
                        <NavLink to="/" className="">
                            New Post
                        </NavLink>
                    </div>
                    <div className="px-2 py-1">
                        <NavLink
                            to="/"
                            className=""
                            onClick={() => logout(setLoggedIn)}
                        >
                            Logout
                        </NavLink>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;