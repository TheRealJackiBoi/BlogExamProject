# React Blog

[Blogged Backend](https://github.com/TheRealJackiBoi/BlogExamProjectBackend)

## Description

Introducing 'Blogged'—a visionary blog platform where users seamlessly share their thoughts with friends. Crafted with the power of React hooks, such as  `useState` and `useEffect`, this application empowers you to effortlessly manage your posts. Edit and refine your creations or gracefully bid them farewell with the deletion feature. Navigating through the content is a breeze, thanks to the elegance of React-router for seamless routing.

Under the hood, this dynamic application communicates effortlessly with a server using the Axios API. Elevating the user experience further, 'Blogged' leverages our own robust [backend application](https://github.com/TheRealJackiBoi/BlogExamProjectBackend) to persistently store your valuable content. Experience the fusion of creativity and technology in this sophisticated blog concept.

Our backend is meticulously crafted in Java, utilizing the powerful Javalin library to sculpt seamless routes for our REST API. This strategic choice ensures optimal performance and robust functionality, providing a solid foundation for our application's backend architecture.

## Features

- Create or login to an account
- Manage your own posts
    - Create post
    - Delete post
    - Edit post
- view posts from other users
- search after specific users posts

## Dependencies

Make sure you have Node.js and npm installed before running the application.

- Node.js: [Download Node.js](https://nodejs.org/)
- json-server: Install using `npm install -g json-server`
- [@react-router](https://github.com/remix-run/react-router/blob/main/README.md) for routing
- [Styling](https://github.com/tailwindlabs/tailwindcss/blob/master/README.md) uses [Tailwind](https://tailwindui.com/) for simple css


## Getting Started

1. Clone the repository:

    ```bash
    git clone git@github.com:TheRealJackiBoi/BlogExamProject.git
    ```

2. Navigate to the project directory:

    ```bash
    cd BlogExamProject
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the json-server for data persistence:

    ```bash
    npm run server
    ```

5. Start the React application:

    ```bash
    npm run dev
    ```

6. Open your browser and visit `http://localhost:3000` to use the shopping list app, and `http://localhost:3001` to view the json-server data.

## CRUD Operationer

### login
```javascript
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
  ```

### create user
```javascript
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
```

### create post
```javascript
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
```


## Project Structure

```
react-Blogged
├── public/
├── src
│   ├── api
│   │   ├── auth
│   │   |   └──auth.js
│   │   ├── config.js
|   |   └── posts.js
│   ├── assets
│   │   └── logo
|   |       └── logo.svg
│   ├── components
│   │   ├── navbar
|   |   |   ├──NavBar.jsx
|   |   |   └──SearchBar.jsx
│   │   ├── post
|   |   |   ├──actions.jsx
|   |   |   ├──Like.jsx
|   |   |   └──Post.jsx
│   │   ├── post-display
|   |   |   ├──Pagination.jsx
|   |   |   └──PostsDisplay.jsx
│   │   └── PostNewModal.jsx
│   ├── pages
│   │   ├── auth
|   |   |   ├──Login.jsx
|   |   |   └──SignUp.jsx
│   │   ├──ErrorPage.jsx
│   │   ├──Home.jsx
│   │   ├──Index.jsx
│   │   ├──MyPosts.jsx
│   │   └──PostEdit.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utilities
│       └──img
│          ├──frontEndMap1.png
│          ├──frontEndMap2.png
│          └──frontEndMap3.png
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Contributing

If you are interested in contribuing to this or any of our future projects, apply via this [Contribute doc](https://www.youtube.com/watch?v=xvFZjo5PgG0) link.

if the first link is broken try here [link](https://www.youtube.com/watch?v=wpV-gGA4PSk)