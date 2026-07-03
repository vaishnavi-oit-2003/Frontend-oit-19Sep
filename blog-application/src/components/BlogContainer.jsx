import React, { useContext } from "react";
import Blog from "./Blog";
import "./Blog.css";
import { BlogContext } from "../context/BlogProvider";

function BlogContainer() {
  const value = useContext(BlogContext);
  return (
    <div id="blog-container">
      {!value ? "" : value.map((blog, index) => <Blog blog={blog} key={index} />)}
    </div>
  );
}

export default BlogContainer;
