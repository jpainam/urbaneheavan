import { useEffect, useState } from "react";
import Modal from "./heroArea/Modal";
const ServiceContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const dataBackground = document.querySelectorAll("[data-background]");
    dataBackground.forEach((dbg) => {
      dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
    });
  }, []);
  return (
    <div className="service-page pb-60 white-bg">
      <div className="container">
        <div className="col-xl-12">
          <div className="service-page-content">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque quisquam est, qui dolorem ipsum
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam enim minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, <br />{" "}
              <br /> Who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful. Nor again is there anyone
              who loves or pursues or desires to obtain pain of itself, because
              it is pain, but because occasionally circumstances occur in which
              toil and pain can procure him some great pleasure. To take a
              trivial example, which of us ever undertakes laborious physical
              exercise, except to obtain some advantage from it?
            </p>
            <h2>
              How To Improve Your Tax Advisor Financial Consulting Services
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.{" "}
            </p>
            <div
              className="video-section"
              data-background="/assets/img/service/services-details.jpg"
            >
              <div className="pop-up-video">
                <div
                  onClick={() => {
                    setSrc("https://www.youtube.com/embed/yFwGpiCs3ss");
                    setShowModal((p) => !p);
                  }}
                  className="video-play-btn"
                >
                  <i className="las la-play"></i> <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} src={src} /> : null}
    </div>
  );
};

export default ServiceContent;
