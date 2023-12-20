import axios from 'axios';
import { BASE_URL } from './config.js'
import { getToken } from './auth/auth.js'

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