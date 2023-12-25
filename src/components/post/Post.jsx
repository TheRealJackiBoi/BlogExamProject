import { useNavigate } from "react-router-dom";
import { getUsername } from "../../api/services/auth/auth";

import Edit from "./Edit";
import Like from "./Like";
import Username from "./Username";

const Post = ({ post, handleLikeClickUpdate }) => {
  const navigate = useNavigate();
  const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const username = getUsername();
  const isCurrentUserPost = username === post.username;

  const checkUsernameEquality = (username, postUsername) => {
    return username === postUsername;
  };

  return (
    <section className="bg-dat-olive p-10 text-center relative w-full my-4">
      <h3
        className="mb-3 text-xl"
        style={{ position: "relative", top: "-16px" }}>
        {post.title}
      </h3>
      {/* Date */}
      <div className="absolute top-16 text-xs text-gray-500">
        {formatDateString(post.createdAt.slice(0, 10))}
      </div>
      {/* Read more */}
      <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
        Read more
      </div>
      {/* Edit */}
      <Edit post={post} username={username}/>
      {/* User */}
      <Username username={post.username} />
      {/* Like */}
      <Like
        postId={post.id}
        likes={post.likes}
        handleLikeClickUpdate={handleLikeClickUpdate}
      />
      {/* Input Content */}
      <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default Post;
