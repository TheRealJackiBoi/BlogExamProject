import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const posts = useLoaderData();


  // Like functionality
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-1/4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blogged community says...</h1>

      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3
            className="mb-3 text-xl"
            style={{ position: "relative", top: "-16px" }}>
            Lorem Ipsum
          </h3>
          {/* Date */}
          <div className="absolute top-16 text-xs text-gray-500">
            18-12-2023
          </div>

          {/* Read more */}
          <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
            Read more
          </div>

          {/* Like */}
          <div
            className="absolute bottom-4 text-gray-500 cursor-pointer"
            onClick={handleLikeClick}>
            <Icon icon={heart} size={14} />
          </div>
          <div className="absolute bottom-4 left-14 text-sm text-gray-500">
            {likeCount}
          </div>
          {/* Input Content */}
          <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae.
            </p>
          </div>
        </section>
      </div>

      {/* Testing how it looks with a second post */}
      <div className="mb-4">
        <section className="h-fit bg-dat-olive p-10 text-center relative">
          <h3
            className="mb-3 text-xl"
            style={{ position: "relative", top: "-16px" }}>
            Lorem Ipsum
          </h3>
          {/* Date */}
          <div className="absolute top-16 text-xs text-gray-500">
            18-12-2023
          </div>

          {/* Read more */}
          <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
            Read more
          </div>

          {/* Like */}
          <div
            className="absolute bottom-4 text-gray-500 cursor-pointer"
            onClick={handleLikeClick}>
            <Icon icon={heart} size={14} />
          </div>
          <div className="absolute bottom-4 left-14 text-sm text-gray-500">
            {likeCount}
          </div>
          {/* Input Content */}
          <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
