import React from "react";
import Like from "./Like";
import Edit from "./Edit";
import ReadMore from "./ReadMore";

const PostActions = ({
  post,
  username,
  handleLikeClickUpdate,
  toggleReadMore,
  isExpanded,
}) => {
  return (
    <div className="flex justify-between my-1">
      <Like
        postId={post.id}
        likes={post.likes}
        handleLikeClickUpdate={handleLikeClickUpdate}
      />

      <div className="flex-inline justify-between">
        <Edit post={post} username={username} />

        <ReadMore
          onToggleReadMore={toggleReadMore}
          isExpanded={isExpanded}
          contentLength={post.content.length}
        />
      </div>
    </div>
  );
};

export default PostActions;