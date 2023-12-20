import axios from 'axios';
import { BASE_URL } from './config.js'
import { getToken } from './auth/auth.js'

export const createPost = async (username, title, content, visibility) => {

    const data = {
        "username": username,
        "title": title,
        "content": content,
        "visibility": visibility
    }

    try {
    const response = await axios.post(`${BASE_URL}/posts`, 
        data, 
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${getToken()}`,
            },
        })
        console.log('Post created:', response.data);

    } 
    catch (error) {
        console.error(error)
    }
}