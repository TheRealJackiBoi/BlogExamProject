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
  const hasReadMoreButton = post.content && post.content.length > 150;

  return (
    <div className="flex justify-between my-1">
      <Like
        postId={post.id}
        likes={post.likes}
        handleLikeClickUpdate={handleLikeClickUpdate}
      />

      <div className="flex items-center">
        <Edit post={post} username={username} />
        {hasReadMoreButton && (
          <ReadMore
            onToggleReadMore={toggleReadMore}
            isExpanded={isExpanded}
            contentLength={post.content.length}
          />
        )}
      </div>
    </div>
  );
};

export default PostActions;
