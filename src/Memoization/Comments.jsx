import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

export default function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log("당신은 Comment를 눌렀다!!");
  }, []);
  return (
    <div>
      {commentList.map((comment) => (
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
