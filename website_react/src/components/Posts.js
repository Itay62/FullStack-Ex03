import React from "react";
import { NavLink } from "react-router-dom";

// Posts component
function Posts(props) {
  return (
    <div className="post">
      <ul className="post-list">
        {props.posts.map((post) => (
          <li key={post.id}>
            <h4 className="post-title">{post.title}</h4>
            <img className="post-image" src={post.img} alt="post" />
            <p>{post.content}</p>
            <footer className="post-meta">
              Published {post.days_past} days ago by {post.author} <br></br>
              <NavLink to={`/post/${post.id}`} className="post-link">
                click here to find out more
              </NavLink>
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
