import "./mobileMenu.css";

import useGetData from "../../hooks/useGetData";
import Menu from "./Menu";
const MobileMenu = ({ showNav, setShowNav }) => {
  const menu = useGetData([], "./data/menu.json");
  return (
    <div className={`mobile-nav  ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        {menu?.length > 0 &&
          menu?.map((m) => (
            <Menu key={m?.id} menu={m} setShowNav={setShowNav} />
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
