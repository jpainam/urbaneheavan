import useGetData from "../../hooks/useGetData";

const ContactForm = () => {
  const contact = useGetData({}, "./data/contact.json");
  return (
    <div className="contact-page section-padding light-bg-1">
      <div className="container">
        <div className="contact-page-inner white-bg">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="contact-form-wrapper">
                <h3>Send A Message</h3>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="tel" placeholder="Phone" />
                  <input type="email" placeholder="E-mail" />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                  />
                  <input type="submit" value="Send A Message" />
                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="contact-details-wrapper">
                <div className="section-title">
                  <p>QUICK CONTACT</p>
                  <h2>Have Questions? Get in Touch!</h2>
                </div>
                <p>
                  Just give us a ring at the phone number below or shoot us an
                  email through the form. We'll get back to you within 48 hours.
                  If you need us quicker, make sure to call as we're able to
                  answer phone calls more quickly than we're able to return
                  emails.
                </p>
                <div className="contact-details">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="las la-phone-volume"></i>
                    </div>
                    <div className="contact-info">
                      <p>Have any question?</p>
                      <h5>{contact?.mobile}</h5>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="las la-envelope-open"></i>
                    </div>
                    <div className="contact-info">
                      <p>Write email</p>
                      <h5>{contact?.mail}</h5>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="las la-phone-volume"></i>
                    </div>
                    <div className="contact-info">
                      <p>Visit anytime</p>
                      <h5>{contact?.address}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
