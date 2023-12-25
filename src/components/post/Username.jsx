import React from "react";
import { useNavigate } from "react-router-dom";

const Username = ({ username }) => {
    const navigate = useNavigate();


  return (
    <div className="absolute top-16 right-10 text-xs text-gray-500 cursor-pointer"
    onClick={() => navigate(`/posts/user/${username}`)}
    >
      {username}
    </div>
  );
};

export default Username;