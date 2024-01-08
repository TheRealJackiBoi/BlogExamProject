import React from "react";
import { getUsername } from "../../api/services/auth/auth";
import Like from "./Like";
import Edit from "./Edit";
import Username from "./Username";
import ReadMore from "./ReadMore";

const Post = ({ post, handleLikeClickUpdate }) => {
  const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const username = getUsername();

  return (
    <section className="bg-dat-olive p-10 text-center relative w-full my-4">
      <h3
        className="mb-3 text-xl"
        style={{ position: "relative", top: "-16px" }}>
        {post.title}
      </h3>
      {/* Date */}
      <div className="absolute top-16 text-xs text-gray-500">
        {formatDateString(post.createdAt.slice(0, 10))}
      </div>
      {/* ReadMore */}
      <ReadMore
        postId={post.id}
        handleLikeClickUpdate={handleLikeClickUpdate}
      />
      <Edit post={post} username={username} />
      <Username username={post.username} />
      {/* Like */}
      <Like
        postId={post.id}
        likes={post.likes}
        handleLikeClickUpdate={handleLikeClickUpdate}
      />
      {/* Input Content */}
      <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default Post;
