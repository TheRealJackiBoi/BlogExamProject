import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getUsername } from "../api/services/auth/auth";
import Post from "../components/post/Post";

import { handleLikeClick, getPostById } from "../api/services/posts";


const PostPage = () => {

  const navigate = useNavigate();
    
  const [post, setPost] = useState(useLoaderData());
  const [isPending, setIsPending] = useState(false);
  const [id, setId] = useState("");
    
    
    
    useEffect(() => {
        const username = getUsername();
        if (username) {
            if (!post) {
              alert("Post not found");
              navigate(-1);
            }            
        }
        else {
            alert("You must be logged in to edit a post.");
            navigate("/auth/login");
        }
    }, [post]);

  const handleLikeClickUpdate = async () => {
      setPost(await getPostById(post.id))
  }



  return (
    <div className="flex flex-col items-center justify-center max-w-prose mt-16 px-4 mx-auto" >
      <h1 className="mb-4 text-3xl font-bold">Post</h1>

      <Post post={post} handleLikeClickUpdate={handleLikeClickUpdate} />
    </div>
  );
}


export default PostPage;