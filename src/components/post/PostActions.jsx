import Like from "./Like"
import Edit from "./Edit"

const PostActions = ({ post, username, handleLikeClickUpdate }) => {

    return (
        <div className="flex justify-between my-1">
            <Like
                postId={post.id}
                likes={post.likes}
                handleLikeClickUpdate={handleLikeClickUpdate}
            />

            <div className="flex-inline justify-between">
                <Edit post={post} username={username}/>

                <div className="text-xs text-gray-500 cursor-pointer">
                    Read more
                </div>
            </div>
        </div>
    )
}

export default PostActions