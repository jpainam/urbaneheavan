import React from "react";
import { AllBlogs, Collaboration, InBlog, Works } from "../components";

const Blogs = () => {
  return (
    <React.Fragment>
      <InBlog />
      <AllBlogs />
      <Works />
      <Collaboration />
    </React.Fragment>
  );
};

export default Blogs;
