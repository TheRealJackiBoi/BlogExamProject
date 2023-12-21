import axios from "axios";
import { BASE_URL } from "./config";
import { getToken } from "./auth/auth";

const userToken = getToken();

export const postsLoader = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });

    if (response.ok) {
      const posts = await response.data;
      setPosts(posts);
    } else {
      console.error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const handleLikeClick = async (postId) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${postId}/likes`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (response.ok) {
      const updatedPosts = response.data.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      );
      setPosts(updatedPosts);
    } else {
      console.error("Failed to update likes");
    }
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};
