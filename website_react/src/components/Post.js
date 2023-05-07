import React from "react";
import { useParams } from "react-router-dom";

// Post component
function Post(props) {
  const { id } = useParams();
  const post = window.posts[id - 1];
  return (
    <div className="post-page">
      <h1>This is my blog</h1>
      <div className="single-post">
        <h4 className="post-title">{post.title}</h4>
        <img className="post-image" src={post.img} />
        <p>{post.content}</p>
        <footer className="post-meta">
          Published {post.days_past} days ago by {post.author}
        </footer>
      </div>
    </div>
  );
}

export default Post;
