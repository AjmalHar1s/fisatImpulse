import React, { useEffect } from "react";
import SectionDivider from "../../components/SectionDivider";
import Social from "../../components/Social";
import Layout from "../Layout";
import { AboutFisat } from "./components/About";
import Contact from "./components/Contact";
import FunFacts from "./components/FunFacts";
import Gallery from "./components/Gallery";
import HeroBanner from "./components/HeroBanner";
import WorkShops from "./components/WorkShops";
import { heroSlider2 } from "../../components/utilits";

const HomeView = () => {
  useEffect(() => {
    return () => {
      heroSlider2();
    };
  }, []);

  return (
    // <Layout pageTitle={"Home"}>
      <div className="homeView">
        <HeroBanner />
        <FunFacts />
        <AboutFisat />
        <WorkShops />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Contact />
      </div>
    // </Layout>
  );
};

export default HomeView;
