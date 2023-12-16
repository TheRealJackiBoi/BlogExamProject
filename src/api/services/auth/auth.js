import axios from 'axios';
import { BASE_URL } from './../config.js'


// Get and Set token
export const setToken = (token) => {

    localStorage.setItem('token', token)
}

export const getToken = () => {

    return localStorage.getItem('token')
}

// Logout
export const logout = (callback) => {

    localStorage.removeItem('token')
    callback(false)
}


export const login = async (username, password, callback) => {

    const data = {
        username: username,
        password: password
    }

    try {
    const response = await axios.post(`${BASE_URL}/auth/login`, 
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

export const register = async (username, password, callback) => {
    
    const data = {
        username: username,
        password: password
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


