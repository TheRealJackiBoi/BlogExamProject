import Like from "./Like"
import Edit from "./Edit"

const PostActions = ({ post, username, handleLikeClickUpdate }) => {

    return (
        <div className="flex justify-between my-1">
            <Like
                post={post}
                handleLikeClickUpdate={handleLikeClickUpdate}
            />

            <div className="flex-inline -mt-1 justify-between">
                <Edit post={post} />

                <div className="inline ml-2 text-xs text-gray-500 cursor-pointer">
                    Read more
                </div>
            </div>
        </div>
    )
}

export default PostActions