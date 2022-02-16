import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function Comments({ commetList }) {
  const handleClick = useCallback(() => {
    console.log("눌렀다 버튼을 너는!");
  }, []);
  return (
    <div>
      {commetList.map((comment) => (
        <CommentItem
          key={comment.id}
          id={comment.id}
          title={comment.title}
          comment={comment.comment}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
