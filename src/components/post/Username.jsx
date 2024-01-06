import React, { useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../api/services/supabase/image-facade";

const Username = ({ username }) => {
  const navigate = useNavigate();

  const handleUsernameClick = () => {
    navigate(`/posts/user/${username}`);
    window.scrollTo(0, 0);
  }

  const [imageurl, setImageurl] = useState("https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png")

  const updateImage = async () => {
    const image = await getImage(username)
    if (image) {
      setImageurl(image)
    }
  }

  useEffect(() => {
  
    updateImage()

  }, [username])



  return (
    <div className="absolute top-14 right-10 text-xs text-gray-500 cursor-pointer"
    onClick={handleUsernameClick}
    >
      {username}
      <img 
        src={imageurl} 
        className="w-6 h-6 rounded-full inline-block ml-2"
        alt="avatar"
      />
    </div>
  );
};

export default Username;