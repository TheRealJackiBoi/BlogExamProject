import React from "react";
import { useNavigate } from "react-router-dom";

const Username = ({ username }) => {
    const navigate = useNavigate();

    const handleUsernameClick = () => {
      navigate(`/posts/user/${username}`);
      window.scrollTo(0, 0);
    }


  return (
    <div className="absolute top-16 right-10 text-xs text-gray-500 cursor-pointer"
    onClick={handleUsernameClick}
    >
      {username}
    </div>
  );
};

export default Username;