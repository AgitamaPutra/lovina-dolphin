import React, { useState, useEffect } from "react";
import { I18nProvider } from "./context/I18context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Loading } from "./components/Loading"; // Import the Loading component
import { Home } from "./pages/home";
import AboutUs from "./pages/AboutUs";
import { OurServices } from "./pages/OurServices";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import { DetailPackage } from "./pages/DetailPackage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <I18nProvider>
        {/* Conditional rendering of the loading component */}
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </I18nProvider>
    </BrowserRouter>
  );
};

export default App;
