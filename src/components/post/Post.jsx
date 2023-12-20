import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/icomoon/heart";
import { handleLikeClick } from "../../api/services/posts";
import { useLoaderData } from "react-router-dom";

const Post = () => {
  const posts = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center h-fit mt-10 w-1/4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Blogged community says...</h1>

      {posts.map((post, index) => (
        <div key={index} className="mb-4">
          <section className="bg-dat-olive p-10 text-center relative">
            <h3
              className="mb-3 text-xl"
              style={{ position: "relative", top: "-16px" }}>
              {post.title}
            </h3>
            {/* Date */}
            <div className="absolute top-16 text-xs text-gray-500">
              {post.formattedCreatedAt}
            </div>

            {/* Read more */}
            <div className="absolute bottom-4 right-10 text-xs text-gray-500 cursor-pointer">
              Read more
            </div>

            {/* Like */}
            <div
              className="absolute bottom-4 text-gray-500 cursor-pointer"
              onClick={() => handleLikeClick(post.id)}>
              <Icon icon={heart} size={14} />
            </div>
            <div className="absolute bottom-4 left-14 text-sm text-gray-500">
              {post.likes}
            </div>

            {/* Input Content */}
            <div className="bg-dat-white text-dat-black p-4 rounded shadow-md text-left relative">
              <p>{post.content}</p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Post;
