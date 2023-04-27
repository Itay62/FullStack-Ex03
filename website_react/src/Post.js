import React from "react";

// Post component
function Post(props) {
  return (
    <div className="post">
      <ul className="post-list">
        {props.posts.map((post) => (
          <li key={post.id}>
            <h4 className="post-title">{post.title}</h4>
            <img className="post-image" src={post.img} />
            <p>{post.content}</p>
            <footer className="post-meta">
              Published {post.days_past} days ago by {post.author}
            </footer>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
