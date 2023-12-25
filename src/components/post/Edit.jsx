import React from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ post, username }) => {
  const navigate = useNavigate();

  const checkUsernameEquality = (username, postUsername) => {
    return username === postUsername;
  };

  return (
    <>
      {post && checkUsernameEquality(username, post.username) && (
        <div
          className="absolute bottom-4 right-28 text-xs text-gray-500 cursor-pointer"
          onClick={() => navigate(`/posts/${post.id}/edit`)}>
          Edit
        </div>
      )}
    </>
  );
};

export default Edit;
