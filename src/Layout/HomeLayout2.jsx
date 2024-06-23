//components
import { Footer2, Header } from "../components";

const HomeLayout2 = ({ children }) => {
  return (
    <>
      <Header className={"header-two"} type={"index-2"} />
      {children}
      <Footer2 />
    </>
  );
};

export default HomeLayout2;
