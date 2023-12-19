import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const posts = useLoaderData();
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  // Convert posts to an array
  const postsArray = Object.values(posts);

  return (
    <div className="flex flex-col items-center justify-center h-fit mt-10 w-1/4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blogged community says...</h1>

      {postsArray.map((post, index) => (
        <div key={index} className="mb-4">
          <section
            className="bg-dat-olive p-10 text-center relative"
          >
            <h3
              className="mb-3 text-xl"
              style={{ position: "relative", top: "-16px" }}
            >
              {post.title}
            </h3>
            {/* Date */}
            <div className="absolute top-16 text-xs text-gray-500">
              {post.createdAt}
            </div>

            {/* Read more */}
            <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
              Read more
            </div>

            {/* Like */}
            <div
              className="absolute bottom-4 text-gray-500 cursor-pointer"
              onClick={handleLikeClick}
            >
              <Icon icon={heart} size={14} />
            </div>
            <div className="absolute bottom-4 left-14 text-sm text-gray-500">
              {likeCount}
            </div>
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

export default Home;