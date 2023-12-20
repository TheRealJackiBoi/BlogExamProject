import axios from "axios";
import { getToken as userToken } from "./auth/auth";
import { BASE_URL } from "./config";

export const postsLoader = async (userToken) => {
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
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:7070/api/posts");
    if (response.ok) {
      const posts = await response.json();
      setPosts(posts).Object.values(posts);
    } else {
      console.error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const handleLikeClick = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:7007/api/posts/${postId}/likes`,
      {
        method: "PUT",
      }
    );
    if (response.ok) {
      const updatedPosts = postsArray.map((post) =>
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
