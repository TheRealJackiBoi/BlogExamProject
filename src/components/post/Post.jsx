import PostInformation from "./PostInformation";
import PostActions from "./PostActions";

const Post = ({ post, handleLikeClickUpdate }) => {
  
  
  return (
    <section className="bg-dat-olive z-0 p-10 text-center relative w-full min-w-fit my-4">
      
      <h3 className="mb-2 text-xl min-w-[250px]">
        {post.title}
      </h3>
      
      <PostInformation date={post.createdAt} username={post.username} />
         

      {/* Input Content */}
      <div className="bg-dat-white min-w-full text-dat-black p-4 rounded shadow-md text-left relative">
        <p>{post.content}</p>
      </div>

      <PostActions post={post} handleLikeClickUpdate={handleLikeClickUpdate} />
    </section>
  );
};

export default Post;
