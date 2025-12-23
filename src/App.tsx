import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import BlogsPage from "./Pages/BlogsPage";
import UploadCVPage from "./Pages/UploadCVPage";
import MentorPage from "./Pages/MentorPage";
import AdvertisePage from "./Components/ContactUs";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/upload-cv" element={<UploadCVPage />} />
        <Route path="/mentors" element={<MentorPage />} />
        <Route path="/advertise" element={<AdvertisePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
