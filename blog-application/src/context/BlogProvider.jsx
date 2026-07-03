import React from "react";
import useFetch from "@shared/hooks/useFetch";
import createAppContext from "@shared/utils/createAppContext";

const { Context: BlogContext, Provider, useAppContext: useBlog } =
  createAppContext("Blog");

function BlogProvider({ children }) {
  const { data, loading, error } = useFetch("http://localhost:3000/blog");

  return <Provider value={data}>{children}</Provider>;
}

export { BlogContext, useBlog };
export default BlogProvider;
