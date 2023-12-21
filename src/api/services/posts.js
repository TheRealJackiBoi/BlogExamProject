import axios from "axios";
import { BASE_URL } from "./config";
import { getToken } from "./auth/auth";

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

export const getAllPosts = async (setPosts) => {
  const token = getToken();
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
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

export const handleLikeClick = async (postId, currentLikes, updateLikes) => {
  try {
    const token = getToken();
    const response = await axios.put(
      `${BASE_URL}/posts/${postId}/likes`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const updatedLikes = currentLikes + 1;
      console.log(
        `Likes updated for post ${postId}. New count: ${updatedLikes}`
      );
      updateLikes(postId, updatedLikes);
    } else {
      console.error("Failed to update likes");
    }
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};


export const createPost = async (title, content, visibility, username) => {

    const data = {
        "title": title,
        "content": content,
        "visibility": visibility,
        "username": username
    }

    try {
    const response = await axios.post(`${BASE_URL}/posts`, 
        data, 
        {
            withCredentials: true,
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getToken()}`,
            },
        })
        console.log('Post created:', response.data);
        return response.data;
    } 
    catch (error) {
        console.error(error)
    }
}