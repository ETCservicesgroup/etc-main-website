import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { Pages } from "./types/types";

function App() {
  const [visiblePage, setVisiblePage] = useState(Pages.HOME);
  return (
    <>
      <Header setVisiblePage={setVisiblePage} />
      {visiblePage === Pages.HOME ? <Home /> : ''}
      {visiblePage === Pages.WHY_US ? <WhyUs /> : ''}
      {visiblePage === Pages.HOW_IT_WORKS ? <HowItWorks /> : ''}
      {visiblePage === Pages.SERVICES ? <Services /> : ''}
      <Footer />
    </>
  );
}

export default App;
