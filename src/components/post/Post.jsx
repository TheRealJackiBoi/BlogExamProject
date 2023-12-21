import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Like from "./Like";

const Post = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);

  const updateLikes = (postId, updatedLikes) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: updatedLikes } : post
    );
    setPosts(updatedPosts);
  };

  const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };


  return (
    <div className="flex flex-col items-center justify-center h-fit mt-10 w-1/4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blogged community says...</h1>

      {posts.map((post, index) => (
        <div key={index} className="mb-4">
          <section className="bg-dat-olive p-10 text-center relative">
            <h3
              className="mb-3 text-xl"
              style={{ position: "relative", top: "-16px" }}>
              {post.title}
            </h3>
            {/* Date */}
            <div className="absolute top-16 text-xs text-gray-500">
              {formatDateString(post.createdAt.slice(0,10))}
            </div>

            {/* Read more */}
            <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
              Read more
            </div>

            {/* Like */}
            <Like postId={post.id} likes={post.likes} updateLikes={updateLikes} />

            {/* Input Content */}
            <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
              <p>{post.content}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Post;
