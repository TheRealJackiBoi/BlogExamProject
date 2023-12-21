import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { handleLikeClick } from "../../api/services/posts";

const Like = ({ postId, likes, updateLikes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    try {
      await handleLikeClick(postId, likes, updateLikes);
      setIsLiked(true);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  return (
    <>
      <div
        className={`absolute bottom-4 text-${
          isLiked ? "dat-red" : "gray"
        }-500 cursor-pointer`}
        onClick={handleClick}>
        <Icon icon={heart} size={14} />
      </div>
      <div className="absolute bottom-4 left-14 text-sm text-gray-500">
        {likes}
      </div>
    </>
  );
};

export default Like;
