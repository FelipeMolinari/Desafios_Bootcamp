import React, { Component } from "react";
import Post from "../Post/Post";
// Photos
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

import "./PostList.css";
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantra",
          avatar: profile1
        },
        date: "01 Jan 2020",
        content: "Alguém aqui gosta de estudar boas técnologias?",
        comments: [
          {
            id: 1,
            author: {
              name: "Marcos Vinicios",
              avatar: profile2
            },
            content:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quae ratione quod dolore quasi id ipsum eveniet, iure quia vitae quidem perferendis consequatur numquam aliquid. Perspiciatis a facere illo rem."
          },
          {
            id: 2,
            author: {
              name: "Marcia Felman",
              avatar: profile3
            },
            content: "Eu também!"
          }
        ]
      },

      {
        id: 2,
        author: {
          name: "Felipe Luiz",
          avatar: profile3
        },
        date: "02 Jan 2020",
        content: "Alguém pode me ajudar no desafio de ReacjJS?",
        comments: [
          {
            id: 1,
            author: {
              name: "Julio Alcantra",
              avatar: profile1
            },
            content: "Qual sua dúvida Felipe?"
          },
          {
            id: 2,
            author: {
              name: "Felipe Luiz",
              avatar: profile3
            },
            content: "Estou tendo dificuldades com display do CSS."
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div className="main">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
