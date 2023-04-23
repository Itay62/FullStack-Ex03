import React from "react";
import "./Website.css";
import Separator from "./Seperator";
import Sidebar from "./Sidebar";
import Post from "./Post";
import Navbar from "./Navbar";

// Main app component
function App() {
  const latest = [
    { id: 1, name: "Blog post #1", link: "#post1" },
    { id: 2, name: "Blog post #2", link: "#post2" },
    { id: 3, name: "Blog post #3", link: "#post3" },
  ];
  const popular = [
    { id: 3, name: "Blog post #3", link: "#post3" },
    { id: 1, name: "Blog post #1", link: "#post1" },
    { id: 2, name: "Blog post #2", link: "#post2" },
  ];
  const posts = [
    {
      id: 1,
      title: "Blog post #1",
      content:
        "My first blog post is all about my blog post and how to write a new post in my blog, you can find here.",
      img: "https://via.placeholder.com/100",
      author: "Israel",
      days_past: "1",
    },
    {
      id: 2,
      title: "Blog post #2",
      content: "My second blog post is all about my blog post.",
      img: "https://via.placeholder.com/100",
      author: "Joe",
      days_past: "2",
    },
    {
      id: 3,
      title: "Blog post #3",
      content: "My third blog post is all about my blog post.",
      img: "https://via.placeholder.com/100",
      author: "Israel",
      days_past: "3",
    },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="main-content">
          <h1 className="title">This is my blog</h1>
          <Post posts={posts} />
        </div>
        <div className="side">
          <Sidebar title="Latest" categories={latest} />
          <Separator />
          <Sidebar title="Popular" categories={popular} />
        </div>
      </div>
    </div>
  );
}
export default App;
