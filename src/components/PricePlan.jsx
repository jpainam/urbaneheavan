import useGetData from "../hooks/useGetData";

const PricePlan = () => {
  const plans = useGetData([], "./data/plans.json");
  return (
    <div className="pricing-section section-padding pb-90 light-bg-1">
      <div className="container">
        <div className="row">
          <div className="offset-xl-3 col-xl-6 text-center">
            <div className="section-title">
              <p>Our Pricing PLANS</p>
              <h2>Simple, Transparent And Great pricing.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {plans?.length > 0 &&
            plans?.map((plan) => (
              <div key={plan?.id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                <div className="single-price-item">
                  <div className="price-heading">
                    <h4>{plan?.tag}</h4>
                    <p>{plan?.title} </p>
                  </div>
                  <div className="price-amount">
                    <h2>
                      ${plan?.price} <span>/ Month</span>
                    </h2>
                  </div>
                  <div className="price-feature-list">
                    <ul>
                      {plan?.facilities?.map((fa, i) => (
                        <li key={`f${i}`}>
                          <i className="las la-check-square"></i>
                          {fa}
                        </li>
                      ))}
                    </ul>
                    <div className="price-btn">
                      <a href="#" className="main-btn white">
                        Purchase Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
