import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsFromLoader = useLoaderData();
  const postsArray = Object.values(posts);

  useEffect(() => {
    setPosts(postsFromLoader);
  }, [postsFromLoader]);

  return (
    <>
      <Post />
    </>
  );
};

export default Home;
