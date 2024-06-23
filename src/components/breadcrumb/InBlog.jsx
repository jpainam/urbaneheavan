import { useOutletContext } from "react-router-dom";

const InBlog = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-8 col-12 text-center">
            <div className="section-title">
              <p>Blog & News</p>
              <h2>
                Check our inside news <br />& update
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InBlog;
