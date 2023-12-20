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
            },
        })
    
    } 
    catch (error) {
        console.error(error)
    }
}