import React from "react";
import Comment from "../Comment/Comment";

import "./Post.css";

function Post({ data }) {
  return (
    <div className="post">
      <div className="profile-user-post">
        <img src={data.author.avatar} alt="Foto profile" />
        <div>
          <p className="name-user">{data.author.name}</p>
          <p className="date-post">{data.date}</p>
        </div>
      </div>
      <div className="content-post">
        <p>{data.content}</p>
      </div>
      <div className="separator"></div>

      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;
