import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/services/config";
import { getToken } from "../api/services/auth/auth";
import { getAllPosts, handleLikeClick } from "../api/services/posts";
import Post from "../components/post/Post";

export const postsLoader = async () => {

  const posts = await getAllPosts();
  if (posts) {
    return posts;
  }
  else {
    return null;
  }
};


const Home = () => {
  const [ posts, setPosts ] = useState(useLoaderData())

  const handleLikeClickUpdate = async () => {
    setPosts(await postsLoader())
    console.log("handleLikeClickUpdate")
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-prose px-4  h-fit mt-10 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blogged community says...</h1>
      {posts ? posts.map((post, index) => (
        <Post post={post} key={index} handleLikeClickUpdate={handleLikeClickUpdate} />
      )) : (<div>Loading...</div>)}
    </div>
  );
};

export default Home;
