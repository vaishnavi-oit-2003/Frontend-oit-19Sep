import React, { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

function BlogProvider({ children }) {
  const [blogData, setBlogData] = useState("");

  const getBlogData = async () => {
    let raw = await fetch(`http://localhost:3000/blog`);
    let data = await raw.json();
    return data;
  };

  useEffect(() => {
    getBlogData()
      .then((data) => setBlogData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BlogContext.Provider value={blogData}>{children}</BlogContext.Provider>
    </>
  );
}

export default BlogProvider;
