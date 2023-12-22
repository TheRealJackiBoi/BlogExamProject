import React, { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { getUserPosts } from "../api/services/posts";
import Post from "../components/post/Post";
import { getUsername } from "../api/services/auth/auth";

export const myPostsLoader = async ( username ) => {
  const posts = await getUserPosts(username);
  if (posts) {
    return posts;
  } else {
    return null;
  }
};

const MyPosts = () => {
  const { posts } = useOutletContext();
  const [thisPosts, setThisPosts] = useState(useLoaderData());
  const username = getUsername();

  const handleLikeClickUpdate = async () => {
    updateThisPosts();
    console.log("handleLikeClickUpdate");
  };

  const updateThisPosts = async () => {
    setThisPosts(await myPostsLoader(username));
  };

  useEffect(() => {
    updateThisPosts();
  }, [posts], [username]);

  return (
    <div className="flex flex-col items-center justify-center max-w-prose px-4  h-fit mt-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Your posts</h1>
      {thisPosts ? (
        thisPosts.map((post, index) => (
          <Post
            post={post}
            key={index}
            handleLikeClickUpdate={handleLikeClickUpdate}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyPosts;
