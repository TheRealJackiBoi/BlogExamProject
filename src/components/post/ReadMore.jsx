import React, { useState } from "react";
import { getPostById } from "../../api/services/posts";

import Like from "./Like";
import Edit from "./Edit";

const ReadMore = ({ postId, onModalOpen, handleLikeClickUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullPostContent, setFullPostContent] = useState(null);

  const handleReadMoreClick = async () => {
    try {
      const fullPost = await getPostById(postId);
      setFullPostContent(fullPost);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching full post content:", error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <div
        className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer"
        onClick={handleReadMoreClick}>
        Read more
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-dat-black bg-opacity-50">
          <div className="bg-dat-olive p-10 rounded shadow-md w-full max-w-md text-white relative">
            <div
              className="absolute top-2 right-2 text-xs text-gray-500 cursor-pointer"
              onClick={handleModalClose}>
              Close
            </div>
            <h3 className="mb-3 text-dat-black text-xl">
              {fullPostContent.title}
            </h3>
            <div className="text-xs text-gray-500">
              {formatDateString(fullPostContent.createdAt.slice(0, 10))}
            </div>
            <div className="text-xs text-gray-500">
              {fullPostContent.username}
            </div>
            <Like
              postId={fullPostContent.id}
              likes={fullPostContent.likes}
              handleLikeClickUpdate={handleLikeClickUpdate}
            />
            <Edit post={fullPostContent} />
            <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative mt-4">
              <p>{fullPostContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadMore;
