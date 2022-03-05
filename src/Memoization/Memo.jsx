import React, { useState, useEffect } from "react";
import Comments from "./Comments";
const commentList = [
  {
    id: 0,
    title: "메세지 타이틀입니다.",
    comment: "현재 메세지가 없습니다.",
    likes: 0,
  },
];
export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          id: prevComments.length,
          title: `Comment${prevComments.length}`,
          comment: `${prevComments.length}번 메세지 입니다.`,
          likes: 1,
        },
      ]);
    }, 2000);
  }, []);
  return <Comments commentList={comments} />;
}
