import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/services/config";
import { getToken } from "../api/services/auth/auth";
import { getAllPosts, handleLikeClick } from "../api/services/posts";
import Post from "../components/post/Post";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

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
  const { posts } = useOutletContext();
  const [loadingStatus, setLoadingStatus] = useState("loading");
  const [thisPosts, setThisPosts] = useState(useLoaderData())
  const [loggedIn, setLoggedIn] = useState(getToken() !== null);

  const navigate = useNavigate();

  const handleLikeClickUpdate = async () => {
    updateThisPosts()
    console.log("handleLikeClickUpdate")
  }

  const updateThisPosts = async () => {
    setLoadingStatus("loading");
    
    const response = await getAllPosts();
    if (response) {
    setThisPosts(response);
    setLoadingStatus("loaded");
    }
    else {
      setLoadingStatus("error");
    }
  }

  useEffect(() => {
    setLoggedIn(getToken() !== null);
    updateThisPosts()
  }, [posts])

  return (
    <div className="flex flex-col items-center justify-center max-w-prose px-4  h-fit mx-auto">
      <h1 className="mb-4 text-3xl mt-20 font-bold">Blogged community says...</h1>
      {thisPosts && loadingStatus === "loaded" ? thisPosts.map((post, index) => (
        <Post post={post} key={index} handleLikeClickUpdate={handleLikeClickUpdate} />
      )) 
      : ( 
      loadingStatus === "error" ? 
      ( loggedIn ? (
        <h3>
          It wasn't possible to load the posts. Please try again later
        </h3>
      ) 
      :
      (
        <>
          <h3>
            Login to see the posts
          </h3>
          <button className=" bg-dat-olive text-dat-white font-bold py-2 px-4 rounded mt-10" onClick={() => navigate('/auth/login')}>
            Login
          </button>
        </>
      )
      
      ) 
      :
      (
      <ClimbingBoxLoader 
        className="mt-20"
        color={"#ADC698"} 
        loading={true} 
        size={20} 
      />
      ))}
    </div>
  );
};

export default Home;
