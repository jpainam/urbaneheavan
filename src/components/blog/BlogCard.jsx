import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="single-blog-item">
      <div className="blog-meta">
        <span>{blog?.tag}</span> . <span>{blog?.published}</span>
      </div>
      <h3>
        <Link to="/blog-details">{blog?.title}</Link>
      </h3>
      <p>{blog?.heading}</p>
      <div className="blog-thumb">
        <img src={blog?.img} alt={blog?.title} />
      </div>
    </div>
  );
};

export default BlogCard;
