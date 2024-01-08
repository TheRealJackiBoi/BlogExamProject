import React, { useState } from "react";

const ReadMore = ({ onToggleReadMore, isExpanded, contentLength }) => {
  const toggleReadMore = () => {
    onToggleReadMore();
  };

  return (
    <>
      {contentLength > 150 && (
        <button
          className="text-xs text-gray-500 cursor-pointer absolute right-10"
          onClick={toggleReadMore}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </>
  );
};

export default ReadMore;
