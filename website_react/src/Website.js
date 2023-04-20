import React from "react";
import "./Website.css";

// Navigation bar component
function Navbar() {
  return (
    <nav className="nav">
      <a href="#" class="not-last">
        Home
      </a>
      <a href="#" class="not-last">
        About Me
      </a>
      <a href="#">Contact Me</a>
      <a href="#" class="login-link">
        Login
      </a>
    </nav>
  );
}

// Post component
function Post(props) {
  return (
    <div className="post">
      <div className="post-content">
        <img src={props.img} class="post-image" />
        <h4 className="post-title">{props.title}</h4>
        <p>{props.content}</p>
        <footer className="post-meta">
          <p>
            Published {props.days_past} days ago by {props.author}
          </p>
        </footer>
      </div>
    </div>
  );
}

// Sidebar component
function Sidebar(props) {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">{props.title}</h3>
      <ul className="category-list">
        {props.categories.map((category) => (
          <li key={`${category.id}-${props.title}`}>
            <p> {category.name}</p> <a href={category.link}>go to page</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Separator component
function Separator() {
  return <hr className="separator" />;
}

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
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper">
        <div className="main-content">
          <h1 className="title">This is my blog</h1>
          <Post
            number="1"
            title="Blog post #1"
            content=<p>
              My <em>first blog post</em> is all about my <em2>blog post</em2>{" "}
              and how to write a new post in my blog, you can find it{" "}
              <a href="#">here</a>
            </p>
            img="https://via.placeholder.com/100"
            author="Israel"
            days_past="1"
          />
          <Post
            number="2"
            title="Blog post #2"
            content=<p>
              My <em>second blog post</em> is all about my blog post.
            </p>
            img="https://via.placeholder.com/100"
            author="Joe"
            days_past="2"
          />
          <Post
            number="3"
            title="Blog post #3"
            content=<p>
              My <em>third blog post</em> is all about my blog post.
            </p>
            img="https://via.placeholder.com/100"
            author="Israel"
            days_past="3"
          />
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
