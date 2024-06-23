import { useEffect } from "react";
const Works = () => {
  useEffect(() => {
    const dataBackground = document.querySelectorAll("[data-background]");
    dataBackground.forEach((dbg) => {
      dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
    });
  }, []);

  return (
    <div
      className="cta-area cta-two"
      data-background="/assets/img/cta_bg_2.jpg"
    >
      <div className="cta-inner-text">
        <div className="text-left">
          <h2 className="text-white">1K+ Satisfied Clients</h2>
        </div>
        <div className="text-right">
          <h2 className="text-white">120+EXPERT TEAM</h2>
        </div>
      </div>
    </div>
  );
};

export default Works;
