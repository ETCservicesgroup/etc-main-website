import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import WhyUs from "./components/WhyUs";
import { Pages } from "./types/types";

function App() {
  const [visiblePage, setVisiblePage] = useState(Pages.HOME);
  return (
    <>
      <Header setVisiblePage={setVisiblePage} />
      {visiblePage === Pages.HOME ? <Home /> : ''}
      {visiblePage === Pages.WHY_US ? <WhyUs /> : ''}
      <Footer />
    </>
  );
}

export default App;
