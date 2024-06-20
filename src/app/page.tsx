"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Cta from "./components/Cta";
import HeroSection from "./components/HeroSection";
import Cta1 from "./components/Cta1";
import Cta2 from "./components/Cta2";
import Features from "./components/Features";
import Trust from "./components/Trust";
import Collaboration from "./components/Collaboration";
import CaseStudy from "./components/CaseStudy";
import Reviews from "./components/Reviews";
import Awards from "./components/Awards";
import Award from "./components/Awards";
import Statistic from "./components/Statistics";
import Cta3 from "./components/Cta3";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <Cta />
      <Cta1 />
      <Cta2 />
      <Features />
      <Trust />
      <Collaboration />
      <CaseStudy />
      <Reviews />
      <Award />
      <Statistic />
      <Cta3 />
      <Footer />
    </div>
  );
};

export default HomePage;
