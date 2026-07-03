import React from "react";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogBtns from "./BlogBtns";
function Blog({blog}) {
  return (
    <div id="blog-post">
      <BlogHeader author={blog.author} />
      <BlogContent image={blog.image} article={blog.article} title={blog.title} sub-title={blog.subtitle} artical={blog.artical} />
      <BlogBtns />
    </div>
  );
}

export default Blog;
