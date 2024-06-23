//components
import { ContactSection, Footer, Header } from "../components";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomeLayout;
