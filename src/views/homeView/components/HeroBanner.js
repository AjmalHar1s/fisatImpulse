import React from "react";

import DEMO_IMG from "../../../assets/img/droid-demo.jpg";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <section id="home2">
        {/* BG */}
        <div className="video_bg">
          <video src="/img/bg.mp4" autoPlay loop muted />
        </div>
        {/* !BG */}
        <div className="container">
          <h3
            className="fn__maintitle big"
            data-text="IMPULSE 5.0"
            data-align="center"
          >
            IMPULSE 5.0
          </h3>
          <div className="fn_cs_desc">
            <p>March 13, 14 and 15 at FISAT</p>
            <p>Federal Institute of Science And Technology, Angamaly</p>
          </div>
        </div>
        {/* Card Slider */}
        <div
          className="frenify_cards_gallery"
          data-initial-width={540}
          data-ratio="0.925"
        >
          <ul>
            <li>
              <div className="img_holder">
                <div className="item">
                  <div className="item_in">
                    <img src={DEMO_IMG} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item">
                  <div className="item_in">
                    <img src={DEMO_IMG} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/1.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/2.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/3.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/5.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/6.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/7.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/8.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="img_holder">
                <div className="item_in">
                  <div className="o_img" data-bg-img="/img/drops/9.jpg" />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Card Slider */}
      </section>
    </div>
  );
};

export default HeroBanner;
