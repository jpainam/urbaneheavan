const BlogContent = () => {
  return (
    <div className="blog-content-wrap">
      <div className="blog-feature-img">
        <img src="/assets/img/blog/blog-details-1.jpg" alt="" />
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered humour, randomised words which don&apos;t look
        even slightly believable. If you are going to passage of Lorem Ipsum,
        you need embarrassing hidden in the middle of text. All the Lorem Ipsum
        Internet tend to repeat predefined chunks as necessary, making this the
        first generator on the Internet. <br /> <br />
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam voluptatem. Ut enim ad
        minima veniam,{" "}
      </p>
      <div className="blog-quote-wrap">
        <div className="quote-icon">
          <i className="las la-quote-left"></i>
        </div>
        <div className="blog-quote-text">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur doloresvoluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet,{" "}
          </p>
          <h6 className="blog-author">
            Jhone Marko / <span>CEO, California</span>{" "}
          </h6>
        </div>
      </div>
      <h2>Tax Solutions For Small & Large Business</h2>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam voluptatem. Ut enim ad
        minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, <br />
        <br />
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because occasionally circumstances
        occur in which toil and pain can procure him some great pleasure. To
        take a trivial example, which of us ever undertakes laborious physical
        exercise,{" "}
      </p>
      <div className="blog-feature-img">
        <img src="/assets/img/blog/blog-details-2.jpg" alt="" />
      </div>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered humour, randomised words which don&apos;t look
        even slightly believable. If you are going to passage of Lorem Ipsum,
        you need embarrassing hidden in the middle of text. All the Lorem Ipsum
        Internet tend to repeat predefined chunks as necessary, making this the
        first generator on the Internet.{" "}
      </p>
      <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="blog-tag-wrap d-flex align-items-center">
            <h5>Tags:</h5>
            <span>Advisor</span>
            <span>Financials</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 text-end">
          <div className="social-icon">
            <a href="#">
              <i className="lab la-facebook-f"></i>
            </a>
            <a href="#">
              <i className="lab la-twitter"></i>
            </a>
            <a href="#">
              <i className="lab la-instagram"></i>
            </a>
            <a href="#">
              <i className="lab la-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pagination-wrap">
        <a href="#">
          <i className="las la-long-arrow-alt-left"></i>Previous Post
        </a>
        <a href="#">
          Next Post<i className="las la-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogContent;
