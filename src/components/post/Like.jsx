import React from 'react';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon/heart';
import { handleLikeClick } from '../../api/services/posts';

const Like = ({ postId, likes, updateLikes }) => {
  return (
    <>
      {/* Like */}
      <div
        className="absolute bottom-4 text-gray-500 cursor-pointer"
        onClick={() => handleLikeClick(postId, likes, updateLikes)}
      >
        <Icon icon={heart} size={14} />
      </div>
      <div className="absolute bottom-4 left-14 text-sm text-gray-500">
        {likes}
      </div>
    </>
  );
};

export default Like;