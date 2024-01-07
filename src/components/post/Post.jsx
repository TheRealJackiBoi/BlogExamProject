import { useNavigate } from "react-router-dom";
import { getUsername } from "../../api/services/auth/auth";

import Edit from "./Edit";
import Like from "./Like";
import PostInformation from "./PostInformation";
import PostActions from "./PostActions";

const Post = ({ post, handleLikeClickUpdate }) => {
  
  const username = getUsername();

  return (
    <section className="bg-dat-olive z-0 p-10 text-center relative w-full my-4">
      
      <h3 className="mb-2 text-xl">
        {post.title}
      </h3>
      
      <PostInformation date={post.createdAt} username={username} />
         

      {/* Input Content */}
      <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
        <p>{post.content}</p>
      </div>

      <PostActions post={post} handleLikeClickUpdate={handleLikeClickUpdate} />
    </section>
  );
};

export default Post;
