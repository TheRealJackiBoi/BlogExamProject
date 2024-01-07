import React, { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Post from "../components/post/Post";
import { useParams } from "react-router-dom";
import { getUserPosts } from "../api/services/posts";

export const userPostsLoader = async ({ params }) => {
  const username = params.username
  const posts = await getUserPosts(username);
  if (posts) {
    return posts;
  } else {
    return null;
  }
};

const UserPosts = ({}) => {
  const { posts } = useOutletContext();
  const [thisPosts, setThisPosts] = useState(useLoaderData());
  const { username: clickedUsername } = useParams();

  const handleLikeClickUpdate = async () => {
    updateThisPosts();
  };

  const updateThisPosts = async () => {
    setThisPosts(await userPostsLoader({ params: { username: clickedUsername }}));
  };

  useEffect(() => {
    updateThisPosts();
  }, [posts, clickedUsername]);

  return (
    <div className="flex flex-col items-center justify-center max-w-prose px-4 mx-auto z-0">
      <h1 className="mb-4 text-3xl mt-20 font-bold">
        {clickedUsername ? `${clickedUsername}'s posts` : "Loading..."}
      </h1>
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

export default UserPosts;
