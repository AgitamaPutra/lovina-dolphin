import React from "react";
import { I18nProvider } from "./context/I18context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import AboutUs from "./pages/AboutUs";
import { OurServices } from "./pages/OurServices";
import Gallery  from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import { Layout } from "./pages/Layout";
import { DetailPackage } from "./pages/DetailPackage";

const App = () => {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-packages" element={<OurServices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/our-packages/:id" element={<DetailPackage />} />
          </Routes>
        </Layout>
      </I18nProvider>
    </BrowserRouter>
  );
};

export default App;
