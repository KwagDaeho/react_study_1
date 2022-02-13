import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React! from Test.js_comment",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function Welcome(props) {
  return <h3>Hello, {props.name}</h3>;
}
export default function Test() {
  return (
    <div>
      <Welcome name="Haraho" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}
