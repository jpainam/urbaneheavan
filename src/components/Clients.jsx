const Clients = ({ className }) => {
  return (
    <div className={`clients-area white-bg ${className || ""}`}>
      <div className="client-logo-wrap">
        <img src="/assets/img/client/themeforest.png" alt="themeforest-logo" />
        <img src="/assets/img/client/codecanyon.png" alt="codecanyon-logo" />
        <img src="/assets/img/client/videohive.png" alt="videohibe-logo" />
        <img
          src="/assets/img/client/graphicriver.png"
          alt="graphicriver-logo"
        />
      </div>
    </div>
  );
};

export default Clients;
