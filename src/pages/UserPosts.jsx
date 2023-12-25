import React, { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import Post from "../components/post/Post";
import { useParams } from "react-router-dom";

export const userPostsLoader = async (username) => {
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

  console.log("clickedUsername", clickedUsername);

  const handleLikeClickUpdate = async () => {
    updateThisPosts();
    console.log("handleLikeClickUpdate");
  };

  const updateThisPosts = async () => {
    setThisPosts(await userPostsLoader(clickedUsername));
  };

  useEffect(() => {
    updateThisPosts();
  }, [posts, clickedUsername]);

  return (
    <div className="flex flex-col items-center justify-center max-w-prose px-4  h-fit mt-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">
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
