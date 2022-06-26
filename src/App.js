import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Aos from "aos";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./Components/NavBar";
import Footer from "./Components/Footer";
import Modals from "./Components/Modals";
import CompanyRegistrationPage from "./Pages/CompanyRegistrationPage";
import LegalDocumentsPage from "./Pages/LegalDocumentsPage";


import FeaturesProductDecriptionPage from "./Pages/FeaturesProductDecriptionPage";
import SubmitFeedBack from "./Pages/SubmitFeedBack";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Price";

import Error from "./Pages/Error";
import "./App.css";


function App() {

  useEffect(() => {
    Aos.init({ duration: 900 });
    window.scrollTo(0, 0)
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/company-registration-page" element={<CompanyRegistrationPage />} />
        <Route path="/legal-documents-page" element={<LegalDocumentsPage />} />

        <Route path="/fetures-decription-page/:id" element={<FeaturesProductDecriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />

        <Route path="/submit-feedback" element={<SubmitFeedBack />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Modals/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
