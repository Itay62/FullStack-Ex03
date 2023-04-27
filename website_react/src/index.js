import React from "react";
import ReactDOM from "react-dom/client";
import "./Website.css";
import Website from "./Website";
import reportWebVitals from "./reportWebVitals";
import AboutMe from "./AboutMe";
import PostsPage from "./PostsPage";
import NewPost from "./NewPost";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

window.posts = [
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Website />,
  },
  {
    path: "/aboutMe",
    element: <AboutMe />,
  },
  {
    path: "/postsPage",
    element: <PostsPage />,
  },
  {
    path: "/newPost",
    element: <NewPost />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
