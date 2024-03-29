import logo from "./../../assets/logo.svg"
import { logout } from "./../../api/services/auth/auth.js";
import { useEffect, useState } from "react";
import { NavLink, useOutletContext, useNavigate } from "react-router-dom";
import { getToken, getUsername } from "./../../api/services/auth/auth.js";
import {menu3} from 'react-icons-kit/icomoon/menu3'
import { Icon } from "react-icons-kit";
import SearchBar from "./SearchBar.jsx";

// get setLoggedIn and loggedIn from props
const NavBar = ({ loggedIn, setLoggedIn, openModal }) => {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [thisLoggedIn, setThisLoggedIn] = useState(loggedIn);

    useEffect(() => {
        const token = getToken();
        if (token) {
            setThisLoggedIn(true)
            setUsername(getUsername());
        }

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 940);
        };

        // Initial check for screen size
        handleResize();

        // Event listener for screen size changes
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);

    }, [loggedIn]);


    const unfocused = () => {
        setBurgerMenuOpen(false);
    }
    
    return (
        <div className="flex justify-between items-center shadow shadow-md fixed w-screen top-0 z-10 bg-dat-olive"
            on    
        >
            <img
                id="navlogo"
                src={logo}
                alt="Blogged logo"
                className="w-6 m-2 hover:cursor-pointer flex-shrink-0"
                onClick={() => {
                    loggedIn ? navigate("/home") : navigate("/");
                }}
                
            />

            { username && <SearchBar /> }

            {isSmallScreen && (
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
                    isSmallScreen ? (!burgerMenuOpen ? "hidden" : " bg-dat-olive absolute top-12 right-1 flex flex-col z-10 divide-y divide-dat-white rounded-lg shadow min-w-[8rem] ") : "flex flex-row justify-between items-end mr-2"
                } flex-shrink-0`}
            >
                {!loggedIn ? ( isSmallScreen ? (<>
                    <NavLink to="/auth/login" className="px-2 py-1">
                            Login
                        </NavLink>
                        <NavLink to="/auth/signup" className="px-2 py-1">
                            Sign Up
                        </NavLink>
                </>) : (<>
                        <NavLink to="/auth/login" className="m-2">
                            Login
                        </NavLink>
                        <NavLink to="/auth/signup" className="m-2">
                            Sign Up
                        </NavLink>
                    </>)
                    
                ) : (
                    
                    <>
                    <div className="px-2 py-1">
                        <NavLink to={`posts/user/${username}`} className="">
                            {username}
                        </NavLink>
                    </div>
                    {isSmallScreen ? (
                        <div className="flex flex-col px-2 py-1">
                        <NavLink to="#" onClick={openModal} className="">
                            New Post
                        </NavLink>
                        <NavLink to={`/settings/${username}`} className="">
                            Settings
                        </NavLink>

                    </div>
                    ) : 
                    (
                        <>
                        <NavLink to="#" onClick={openModal} className="mx-2 my-1">
                            New Post
                        </NavLink>
                        <NavLink to={`/settings/${username}`} className="mx-2 my-1">
                            Settings
                        </NavLink>
                        </>
                    )}
                    
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