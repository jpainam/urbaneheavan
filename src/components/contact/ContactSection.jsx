import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="contact-area section-padding pt-0">
      <div className="container">
        <div className="contact-section-inner">
          <div className="contact-section-content">
            <h2 className="text-white">Want to work with us?</h2>
            <h5 className="text-white">
              Meet our people. See our work. Join our team.
            </h5>
            <Link to="/contact" className="main-btn">
              Contact With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
