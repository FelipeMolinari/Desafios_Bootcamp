import React from "react";
import profile2 from "../../assets/profile2.jpg";
import "./Comment.css";

function Comment({ data }) {
  console.log(data);
  return (
    <div className="comment-post">
      <img src={data.author.avatar} alt="User photo" />
      <p className="comment">
        <strong>{data.author.name} </strong>
        {data.content}
      </p>
    </div>
  );
}

export default Comment;
