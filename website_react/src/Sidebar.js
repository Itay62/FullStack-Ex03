import React from "react";

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

export default Sidebar;
