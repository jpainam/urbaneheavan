import BlogContent from "./BlogContent";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

const SingleBlog = () => {
  const recents = useGetData([], "./data/recentposts.json");
  return (
    <div className="blog-details-page light-bg-1">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12">
            <BlogContent />
            <Comments />
            <CommentForm />
          </div>
          <div className="col-xl-4 col-lg-4 col-12">
            <div className="blog-sidebar">
              <div className="search-bar-wrap d-flex">
                <input type="search" placeholder="search" />
                <i className="fal fa-search"></i>
              </div>
              <div className="blog-category">
                <h5>Categories</h5>
                <ul>
                  <li>
                    <i className="las la-angle-double-right"></i>
                    <Link to="/blog">Investment</Link>
                  </li>
                  <li>
                    <i className="las la-angle-double-right"></i>
                    <Link to="/blog">Taxation</Link>
                  </li>
                  <li>
                    <i className="las la-angle-double-right"></i>
                    <Link to="/blog">Insight</Link>
                  </li>
                  <li>
                    <i className="las la-angle-double-right"></i>
                    <Link to="/blog">Financial</Link>
                  </li>
                  <li>
                    <i className="las la-angle-double-right"></i>
                    <Link to="/blog">Strategy</Link>
                  </li>
                </ul>
              </div>
              <div className="recent-post-wrap">
                <h5>Recent Post</h5>
                {recents?.length > 0 &&
                  recents?.map((nPost) => (
                    <div key={nPost?.id} className="single-recent-post">
                      <div className="recent-post-thumbs">
                        <img src={nPost?.img} alt={nPost?.title} />
                      </div>
                      <div className="recent-post-content">
                        <p>{nPost?.published}</p>
                        <a href="/#">
                          <h6>{nPost?.title}</h6>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="popular-tag-wrap">
                <h5>Popular Tag</h5>
                <span>Advisor</span>
                <span>Financials</span>
                <span>Tax</span>
                <span>Taxation</span>
                <span>Accounting</span>
              </div>
              <div className="question-wrap">
                <h5>Have Any Question?</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the alteration in some form,{" "}
                </p>
                <div className="contact-info">
                  <div className="contact-icon">
                    <i className="las la-phone"></i>
                  </div>
                  <h4>(+62)81 122 4341</h4>
                </div>
                <div className="contact-info">
                  <div className="contact-icon">
                    <i className="las la-envelope"></i>
                  </div>
                  <h4>info@email.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
