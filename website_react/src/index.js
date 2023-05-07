import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
