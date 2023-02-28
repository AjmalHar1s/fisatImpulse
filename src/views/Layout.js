import React, { Fragment, useEffect } from "react";
import Footer from "../components/Footer";
import ImageView from "../components/ImageView";
import MobileNavigation from "../components/MobileNavigation";
import Navbar from "../components/Navbar";
import PreLoader from "../components/PreLoader";
import VideoPopup from "../components/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "../components/utilits";
import Social from "../components/Social";
import ScrollTop from "../components/ScrollTop";

const Layout = ({ children }) => {
  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* <Navigation /> */}
      {/* <Searchbox /> */}
      {/* <WalletPopUp /> */}
      <div className="metaportal_fn_main">
        <MobileNavigation />
        <Navbar />
        <div className="metaportal_fn_content">
          {children}
          <Footer />
        </div>
        <Social />
        <ScrollTop />
      </div>
    </Fragment>
  );
};

export default Layout;
