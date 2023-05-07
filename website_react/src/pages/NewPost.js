import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: window.posts.length + 1,
      title,
      content,
      img: "https://via.placeholder.com/100",
      author,
      days_past: "0",
    };
    window.posts.push(newPost);
    setTitle("");
    setContent("");
    setAuthor("");
    alert("You have published a new post!");
  };

  return (
    <div>
      <h1>New post</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button type="submit">Create New Post</button>
      </form>
    </div>
  );
}

export default NewPost;
