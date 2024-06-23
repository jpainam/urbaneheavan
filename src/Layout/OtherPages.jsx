import { ContactSection, Footer, Header } from "../components";

const OtherPages = ({ children }) => {
  return (
    <>
      <Header className={"light-bg-1"} />
      {children}
      <ContactSection />
      <Footer />
    </>
  );
};

export default OtherPages;
