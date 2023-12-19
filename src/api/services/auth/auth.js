import axios from 'axios';
import { BASE_URL } from './../config.js'


const TOKEN_EXPIRY = 3600000 // 1 hour

// Get and Set token
export const setToken = (tokenValue) => {
    const now = new Date()

    const token = {
        "value": tokenValue,
        "expiry": now.getTime() + TOKEN_EXPIRY
    }
    localStorage.setItem('token', JSON.stringify(token))
    return token.value
}

export const getToken = () => {

    const tokenStr = localStorage.getItem('token')

    if (!tokenStr) {
        return null
    }

    const token = JSON.parse(tokenStr)
    const now = new Date()

    if (now.getTime() > token.expiry) {
        localStorage.removeItem('token')
        return null
    }

    return token.value
}

// Logout
export const logout = (callback) => {

    localStorage.removeItem('token')
    callback(false)
}


export const login = async (username, password, callback) => {
    const data = {
      username: username,
      password: password,
    };
  
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const token = response.data.token;
      setToken(token);
  
      callback(true);
  
      return true; // Indicate successful login
    } catch (error) {
      console.error(error);
      callback(false);
      return false; // Indicate login failure
    }
  };
export const register = async (username, password, callback) => {
    
    const data = {
        "username": username,
        "password": password
    }

    try {
    const response = await axios.post(`${BASE_URL}/auth/register`, 
        data, 
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        })
    const token = response.data.token
    callback(true)
    setToken(token)
    } 
    catch (error) {
        console.error(error)
    }
}


