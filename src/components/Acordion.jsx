import { useState } from "react";
import useGetData from "../hooks/useGetData";

const Acordion = ({ type }) => {
  const [firstTime, setFirstTime] = useState(true);
  const faqs = useGetData([], "./data/faq.json");
  return (
    <div className="accordion faqs" id="accordionFaq">
      {faqs?.length > 0 &&
        (type === "2" ? faqs.slice(0, 3) : faqs)?.map((faq) => (
          <div key={faq?.id} className="card">
            <div className="card-header" id="heading1">
              <h5 className="mb-0 subtitle">
                <button
                  className={`btn btn-link active ${
                    faq?.id === "heading1" && firstTime ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${faq?.closeId}`}
                  aria-expanded="false"
                  aria-controls={faq?.closeId}
                >
                  {faq?.ques}
                </button>
              </h5>
            </div>

            <div
              onClick={() => setFirstTime(false)}
              id={faq?.closeId}
              className={`collapse ${
                faq?.id === "heading1" && firstTime ? "show" : ""
              }`}
              aria-labelledby={faq?.id}
              data-parent="#accordionFaq"
            >
              <div className="card-body">
                <div className="content">
                  <p>{faq?.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Acordion;
