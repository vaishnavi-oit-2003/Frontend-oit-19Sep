import React from "react";

function BlogContent({ image, title, article }) {
  return (
    <div id="blog-content">
      <article>
        <div className="artical-img">
          <img src={image} alt={title} />
        </div>
        <div className="artical-data">
          <h2>{title}</h2>
          {article.map((section, index) => (
            <div key={index} className="data">
              <h3>{section["sub-title"]}</h3>
              {section.paragraph.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default BlogContent;

