import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { handleLikeClick, handleUnLikeClick } from "../../api/services/posts";
import { getUsername } from "../../api/services/auth/auth";

const Like = ({ post, handleLikeClickUpdate }) => {
  const username = getUsername();
  const [isLiked, setIsLiked] = useState(post.haveLikedUsernames.includes(username))

  const handleLike = async () => {
    
    let response;
    if (isLiked) {
      response = await handleUnLikeClick(post.id);
    }
    else if (!isLiked) {
      response = await handleLikeClick(post.id);
    }
    else {
      console.log("Couldn't like post")
      return;
    }
    if (response.status === 200) {
      isLiked ? setIsLiked(false) : setIsLiked(true)
      handleLikeClickUpdate()
    }
    else {
      console.log("Couldn't like post")
    }
  }
  return (
    <div className="flex">
      <div
        className="text-gray-500 cursor-pointer mr-1 -mt-2"
        onClick={handleLike}>
        <Icon icon={heart} className={isLiked && "text-dat-red"} size={14} />
      </div>
      <div className="left-14 text-xs text-gray-500">
        {post.likes}
      </div>
    </div>
  );
};

export default Like;
