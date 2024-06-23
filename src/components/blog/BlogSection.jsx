import React from "react";
import useGetData from "../../hooks/useGetData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogs = useGetData([], "./data/blogs.json");
  return (
    <div className="blog-section section-padding pb-90 white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <h6>Blog & Articles</h6>
              <h2>
                Articles daily updated latest articles directly from the blog
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs?.length > 0 ? (
            <React.Fragment>
              <div
                className="col-md-6 col-12 text-center wow fadeInLeft animated"
                data-wow-delay="200ms"
              >
                <BlogCard blog={blogs?.[0]} />
              </div>
              <div
                className="col-md-6 col-12 text-center wow fadeInLeft animated"
                data-wow-delay="400ms"
              >
                <BlogCard blog={blogs?.[1]} />
              </div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
