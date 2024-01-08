import { useState } from "react";
import PostInformation from "./PostInformation";
import PostActions from "./PostActions";

const Post = ({ post, handleLikeClickUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-dat-olive z-0 p-10 text-center relative w-full min-w-fit my-4">
      <h3 className="mb-2 text-xl min-w-[250px]">{post.title}</h3>

      <PostInformation date={post.createdAt} username={post.username} />

      {/* Input Content */}
      <div
        className={`bg-dat-white min-w-full text-dat-black p-4 rounded shadow-md text-left relative ${
          isExpanded ? "max-h-full" : "max-h-[100px]"
        } overflow-hidden transition-max-h ease-in-out duration-300`}>
        <p>{post.content}</p>
      </div>

      <PostActions
        post={post}
        handleLikeClickUpdate={handleLikeClickUpdate}
        toggleReadMore={toggleReadMore}
        isExpanded={isExpanded}
      />
    </section>
  );
};

export default Post;
