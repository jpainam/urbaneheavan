const Details = () => {
  return (
    <div className="project-details-page pb-120 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bread-bg">
              <img
                src="assets/img/project/projects_details_banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details">
              <h2>Project Details</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.{" "}
                <br />
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam,
              </p>
              <h2 className="mb-30">Service Provided</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit laboriosam,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="pagination-wrap">
            <a href="#">
              <i className="las la-long-arrow-alt-left"></i>Previous
            </a>
            <a href="#">
              <i className="las la-long-arrow-alt-right"></i>Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
