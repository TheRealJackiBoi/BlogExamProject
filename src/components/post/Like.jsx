import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { handleLikeClick } from "../../api/services/posts";

const Like = ({ postId, likes, handleLikeClickUpdate }) => {

  const handleLike = async () => {
    const response = await handleLikeClick(postId);
    if (response.status === 200) {
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
        <Icon icon={heart} size={14} />
      </div>
      <div className="left-14 text-xs text-gray-500">
        {likes}
      </div>
    </div>
  );
};

export default Like;
