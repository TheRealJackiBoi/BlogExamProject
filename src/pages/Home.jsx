import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/services/config";
import { getToken } from "../api/services/auth/auth";
import Post from "../components/post/Post";

export const postsLoader = async () => {

  try {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}/posts`, {
      
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};


const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsFromLoader = useLoaderData();

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
