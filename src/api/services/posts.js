import axios from "axios";
import { BASE_URL } from "./config";
import { getToken, getUsername } from "./auth/auth";

export const getPostById = async (id) => {
  const token = getToken();
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`, {
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.status === 200) {
      const post = await response.data;
      return post;
    } else {
      console.error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const getAllPosts = async () => {
  const token = getToken();
  try {
    const response = await axios.get(`${BASE_URL}/posts`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const posts = await response.data;
      return posts;
    } else {
      console.error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const handleLikeClick = async (postId) => {
  try {
    const username = await getUsername();
    const token = getToken();
    const response = await axios.put(
      `${BASE_URL}/posts/${postId}/like/${username}`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(`Likes updated for post ${postId}`);
      return response;
    } else {
      console.error("Failed to update likes");
    }
  } catch (error) {
    console.error("Error updating likes:", error);
  }
};

export const handleUnLikeClick = async (postId) => {
  try {
    const username = await getUsername();
    const token = getToken();
    const response = await axios.put(
      `${BASE_URL}/posts/${postId}/unlike/${username}`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(`Likes updated for post ${postId}`);
      return response;
    } else {
      console.error("Failed to update likes");
    }
  } catch (error) {
    console.error("Error updating likes:", error);
  }
}


export const createPost = async (title, content, visibility, username) => {
  const data = {
    "title": title,
    "content": content,
    "visibility": visibility,
    "username": username,
  };

  try {
    const response = await axios.post(`${BASE_URL}/posts`, data, {
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log("Post created:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (post) => {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${post.id}`, post, {
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log("Post updated:", response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getUserPosts = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/user/${username}`, {
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    });
    console.log(response);
    if (response.status === 200) {
      const posts = await response.data;
      return posts;
    } else {
      console.error("Failed to fetch posts");
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
