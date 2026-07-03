import React from "react";

function BlogHeader({ author }) {
  return (
    <div id="blog-header">
      <div>
        <img
          src={
            !author.profile
              ? "https://i.pinimg.com/736x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg"
              : author.profile
          }
          alt=""
        />
        <span>
          <p>{author.name}</p> {author.designation}
        </span>
      </div>

      <button className="follow-btn">follow</button>
    </div>
  );
}

export default BlogHeader;
