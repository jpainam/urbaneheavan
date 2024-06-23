import Acordion from "./Acordion";

const Faq2 = () => {
  return (
    <div className="faq-section faq-two dark-bg section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInDown animated"
            data-wow-delay="200ms"
          >
            <div className="section-title">
              <p>General Questions</p>
              <h2 className="text-white">Frequently Asked Question.</h2>
            </div>
            <Acordion type={"2"} />
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="contact-form-wrap">
              <div className="contact-form-header">
                <p>SEND A MESSAGE</p>
                <h2>Request A Call Back</h2>
              </div>

              <div className="contact-form-inner">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-6 col-12">
                      <input type="text" placeholder="How can help you?" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <input type="submit" value="Send a Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq2;
