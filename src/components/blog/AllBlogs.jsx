import useGetData from "../../hooks/useGetData";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const blogs = useGetData([], "./data/blogs.json");
  return (
    <div className="blog-page pb-120 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="blog-slider-item">
              <img src="assets/img/blog/blog_banner.jpg" alt="" />
              <div className="blog-content">
                <div className="single-blog-item">
                  <div className="blog-meta">
                    <span>Taxation</span> . <span>25 March 2023</span>
                  </div>
                  <h3>
                    <a href="blog-details.html">
                      If The White Whale Be Raised It Must Be In A Month
                    </a>
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-120">
          <div className="col-xl-6">
            <div className="blog-search-wrap">
              <h2>Check our inside News</h2>
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="search-bar mt-40">
                    <input type="text" placeholder="Search in Blog" />
                    <div className="search-icon">
                      <i className="fal fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          {blogs?.length > 0
            ? blogs?.map((blog, i) => {
                let k = i + 1;
                if (k > 3) {
                  k = k - 3;
                }
                return (
                  <div
                    key={blog?.id}
                    className={`col-md-6 col-12 text-center wow fadeInLeft animated`}
                    data-wow-delay={`${k * 200}ms`}
                  >
                    <BlogCard blog={blog} />
                  </div>
                );
              })
            : null}
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="las la-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
