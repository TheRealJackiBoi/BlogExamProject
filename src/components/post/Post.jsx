<<<<<<< HEAD
import React from "react";
import { getUsername } from "../../api/services/auth/auth";
import Like from "./Like";
import Edit from "./Edit";
import Username from "./Username";
import ReadMore from "./ReadMore";
=======
import PostInformation from "./PostInformation";
import PostActions from "./PostActions";
>>>>>>> 7202a8433800d581fb4028c02b38117bdc3309a1

const Post = ({ post, handleLikeClickUpdate }) => {
  
  
  return (
    <section className="bg-dat-olive z-0 p-10 text-center relative w-full min-w-fit my-4">
      
      <h3 className="mb-2 text-xl min-w-[250px]">
        {post.title}
      </h3>
<<<<<<< HEAD
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
=======
      
      <PostInformation date={post.createdAt} username={post.username} />
         

>>>>>>> 7202a8433800d581fb4028c02b38117bdc3309a1
      {/* Input Content */}
      <div className="bg-dat-white min-w-full text-dat-black p-4 rounded shadow-md text-left relative">
        <p>{post.content}</p>
      </div>

      <PostActions post={post} handleLikeClickUpdate={handleLikeClickUpdate} />
    </section>
  );
};

export default Post;
