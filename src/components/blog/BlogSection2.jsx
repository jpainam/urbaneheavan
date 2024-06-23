import useGetData from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
const BlogSection2 = () => {
  const recents = useGetData([], "./data/recentposts.json");
  const blogs = useGetData([], "./data/blogs.json");
  return (
    <div className="blog-section section-padding white-bg pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <p>VISITING OUR BLOG</p>
              <h2>Latest News And Articles From The Blog Posts</h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div
            className="col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            {blogs?.length > 0 && <BlogCard blog={blogs?.[2]} />}
          </div>
          <div
            className="col-lg-6 col-12 wow fadeInDown animated"
            data-wow-delay="200ms"
          >
            {recents?.length > 0 &&
              recents?.map((nPost) => (
                <div key={nPost?.id} className="single-blog-item w-thumb">
                  <div className="blog-meta">
                    <span>{nPost?.tag}</span> . <span>{nPost?.published}</span>
                  </div>
                  <h3>
                    <Link to="blog-details">{nPost?.title}</Link>
                  </h3>
                  <Link to="/blog-details" className="details-link">
                    <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection2;
