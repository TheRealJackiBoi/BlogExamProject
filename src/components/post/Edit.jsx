import React from "react";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../../api/services/auth/auth";

const Edit = ({ post }) => {
  const navigate = useNavigate();

  const checkUsernameEquality = (postUsername) => {
    return getUsername() === postUsername;
  };

  return (
    <>
      {post && checkUsernameEquality(post.username) && (
        <p
          className="inline text-xs text-gray-500 cursor-pointer"
          onClick={() => navigate(`/posts/${post.id}/edit`)}>
          Edit
        </p>
      )}
    </>
  );
};

export default Edit;
