import React, { useState, useEffect } from "react";
import Comments from "./Comments";
const commentList = [
  { id: 1, title: "Comment1", comment: "메세지 1번입니다.", likes: 1 },
];
export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: prevComments.length + 1,
          title: `Comment${prevComments.length + 1}`,
          comment: `메세지 ${prevComments.length + 1}번입니다.`,
          likes: 1,
        },
      ]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Comments commetList={comments} />;
}
