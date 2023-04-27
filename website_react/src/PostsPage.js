import React from "react";
import Navbar from "./Navbar.js";
import Post from "./Post.js";

function PostsPage() {
  return (
    <div className="container">
      <Navbar />
      <h1>All posts</h1>
      <Post posts={window.posts} />
    </div>
  );
}

export default PostsPage;
