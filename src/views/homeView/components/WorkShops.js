
import React from "react";
import { Link } from "react-router-dom";

const WorkShops = () => {
  return (
    <section id="about2">
      <div className="container small">
        <h3 className="fn__gradient_title_workshop">Workshops</h3>
        <div className="fn_cs_shortabout">
          <div className="about_left">
            <h3 className="fn__maintitle" data-text="Capture The Flag">
              Capture The Flag
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Cyber security is a high priority of companies, small and big,
                as cyber attacks have been on the rise in recent years
              </p>
            </div>
            <a href="/" className="metaportal_fn_button" rel="noreferrer">
              <Link to="/nft/1">
                <span>Register Now</span>
              </Link>
            </a>
          </div>
          <div className="about_right">
            <div className="abs_img" data-bg-img="/img/about/2.jpg" />
          </div>
        </div>
        <div className="fn_cs_shortabout">
          <div className="about_left">
            <h3 className="fn__maintitle" data-text="Robotic Automation">
              Robotic Automation
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                If you’re still merely talking about the Fourth Industrial
                Revolution, you can stop theorizing, because it’s already here
                and is making
              </p>
            </div>
            <a href="/" className="metaportal_fn_button" rel="noreferrer">
              <Link to="/nft/2">
                <span>Register Now</span>
              </Link>
            </a>
          </div>
          <div className="about_right">
            <div className="abs_img" data-bg-img="/img/about/2.jpg" />
          </div>
        </div>
        <div className="fn_cs_shortabout">
          <div className="about_left">
            <h3 className="fn__maintitle" data-text="Hybrid Vehicles">
              Hybrid Vehicles
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                Globally, the electric car stock is projected to reach 20
                million by 2020 and 70 million by 2025. India itself is
                estimated to see 30.81
              </p>
            </div>
            <a href="/" className="metaportal_fn_button" rel="noreferrer">
              <Link to="/nft/3">
                <span>Register Now</span>
              </Link>
            </a>
          </div>
          <div className="about_right">
            <div className="abs_img" data-bg-img="/img/about/2.jpg" />
          </div>
        </div>
        {/* <div className="fn_cs_collection_info">
          <h3 className="fn__gradient_title">10,000</h3>
          <h3
            className="fn__maintitle upper"
            data-text="Total Items in Collection"
          >
            Total Items in Collection
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
        </div> */}
      </div>
      <div className="fn_cs_video bg">
        <div className="abs_img" data-bg-img="/img/video/1.jpg" />
        <a
          className="popup-youtube"
          href="https://www.youtube.com/embed/7e90gBu4pas"
        >
          <img src="/svg/play.svg" alt="" className="fn__svg" />
        </a>
      </div>
      <div className="container">
        {/* Steps Shortcode */}
        {/* <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
          <ul>
            <li>
              <div className="item">
                <div className="item_in">
                  <h3 className="fn__gradient_title">01</h3>
                  <p>Connect your Wallet</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <h3 className="fn__gradient_title">02</h3>
                  <p>Select Your Quantity</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <h3 className="fn__gradient_title">03</h3>
                  <p>Confirm The Transaction</p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_in">
                  <h3 className="fn__gradient_title">04</h3>
                  <p>Receive Your {`NFT’s`}</p>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        {/* !Steps Shortcode */}
      </div>
    </section>
  );
};

export default WorkShops;
