import { Outlet } from "react-router-dom";
//utils
import ScrollToTop from "../utils/ScrollToTop";
import useScroll from "../hooks/useScroll";
import { Cursor, PreLoader } from "../components";

const Main = () => {
  const scrolled = useScroll();
  return (
    <ScrollToTop>
      <Cursor />
      <PreLoader />
      <Outlet context={[scrolled]} />
    </ScrollToTop>
  );
};

export default Main;
