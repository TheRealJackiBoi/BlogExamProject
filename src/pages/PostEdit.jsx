import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getUsername } from "../api/services/auth/auth";
import { updatePost, getPostById } from "../api/services/posts";

export const loader = async ({ params }) => {

    
    const id = params.id

    const post = await getPostById(id);
    if (await post) {
        console.log("Post found", post)
        return post;
    }
    else {
        console.log("Post not found")
        return null
    }
}


const PostEdit = () => {
    const navigate = useNavigate();
    const post = useLoaderData();
    
    const [isPending, setIsPending] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState("");
    
    
    
    useEffect(() => {
        const username = getUsername();
        if (username) {
            if (post) {
                if (username !== post.username) {
                    navigate(-1);
                }
                else if (!post) {
                    alert("Post not found");
                    navigate(-1);
                }
                else {
                    setTitle(post.title);
                    setContent(post.content);
                    setId(post.id);
                }
            }
            
        }
        else {
            alert("You must be logged in to edit a post.");
            navigate("/auth/login");
        }
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const username = post.username;
        const editedPost = {
            "id": id,
            "title": data.get("title"), 
            "content": data.get("content"), 
            "visibility": data.get("visibility"),
            "username": username
        }
        setIsPending(true);
        const response = await updatePost(editedPost);
        if (response.status === 200) {
            setIsPending(false);
            navigate(`/posts/${id}`);
        }
        else {
            setIsPending(false);
            alert("Failed to update post.");
        }
    };
    
    const onCancel = () => {
        navigate(-1);
    };

    return (
        <>
        {isPending && <div>Loading...</div>}
        {post && (
            <form onSubmit={handleSubmit} className="flex flex-col mt-20 mx-auto bg-dat-olive sm:w-11/12 md:w-9/12 lg:w-4/12 p-10 relative">
            <h3 className="text-3xl text-center m-2 -mt-1 mb-6">Edit Post</h3>
            <div className="flex flex-row justify-between py-2">
                <label className="inline text-xl mt-4 -mb-4 text-dat-black">Post title: 
                
                </label>
                <button 
                    className="float-right inline bg-dat-red px-4 py-2 rounded-full" 
                    onClick={onCancel}
                >X</button>
            </div>
            <input
                name="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-dat-white text-dat-black pl-2 p-2 rounded shadow-md shadow-gray-400 mb-4"
            />
            <label className="text-xl text-dat-black">Post content:</label>
            <textarea
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-dat-white hover:resize-y resize-none text-dat-black pl-2 p-2 h-44 rounded shadow-md shadow-gray-400 mb-4"

            ></textarea>
            <label className="text-xl text-dat-black">Visibility</label>
            <select name="visibility" defaultValue="public" 
                className="bg-dat-white text-dat-black pl-2 p-2 rounded shadow-md shadow-gray-400 mb-4"
            >
                <option value="PUBLIC" >Public</option>
                <option value="PRIVATE">Private</option>
                <option value="FRIENDS">Friends</option>
                <option value="ARCHIVED">Archived</option>
            </select>
            <button type="submit" className="rounded-full mt-12 bg-dat-blue text-2xl mx-auto py-4 px-8 text-dat-white">Update Post</button>
            </form>
        )}
        </>
    );
    }

export default PostEdit;
