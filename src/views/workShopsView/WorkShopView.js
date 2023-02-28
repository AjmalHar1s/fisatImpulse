import React from "react";
import { Link } from "react-router-dom";

const WorkShopView = () => {
  function workShopType(type) {
    if (type == 1) {
      return (
        <>
          <div className="metaportal_fn_mintpage">
            <div className="container small">
              {/* Mint Top */}
              <div className="metaportal_fn_mint_top">
                <div className="mint_left">
                  <div className="img">
                    <div className="img_in" data-bg-img="/img/about/1.jpg">
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="metaportal_fn_breadcrumbs">
                    <p>
                      <Link to="/">
                        <a>Home</a>
                      </Link>
                      <span className="separator">/</span>
                      <span className="current">Capture The Flag</span>
                    </p>
                  </div>
                  <h3
                    className="fn__maintitle"
                    data-text="Capture The Flag"
                    data-align="left"
                  >
                    Capture The Flag
                  </h3>
                  <div className="desc">
                    <p>
                      Capture The Flag (CTF) is a kind of information security
                      competition that challenges contestants to solve a variety
                      of tasks ranging from basic programming exercises, to
                      hacking your way into a server to steal data. In these
                      challenges, the contestant is usually asked to find a
                      specific piece of text that may be hidden on the server or
                      behind a webpage. This goal is called the flag.
                    </p>
                    <p>
                      CTFs provide a list of challenges and award points to
                      individuals or teams that complete the challenges, groups
                      with the most points wins.CTFs can be played as an
                      individual or in teams so feel free to get your friends
                      onboard!
                    </p>
                    <p>
                      This Capture The Flag (CTF) of IMPULSE 4.0 is a
                      self-developed platform by our student members to make the
                      participants understand the concepts of network security
                      and Ethical Hacking in an interactive and fun mode. So
                      stay tuned to Explore this extravaganza.
                    </p>
                  </div>
                </div>
              </div>
              {/* !Mint Top */}
              {/* Mint Box */}
              <div className="metaportal_fn_mintbox">
                <div className="mint_left">
                  <div className="mint_title">
                    <span>INFO</span>
                  </div>
                  <div className="mint_list">
                    <ul>
                      <li>
                        <div className="item">
                          <h4>Date</h4>
                          <h3>MARCH 13, 14 & 15</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Place</h4>
                          <h3>CCF - LAB FISAT</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Location</h4>
                          <h3>Angamaly, Kerala</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mint_desc">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>BUY TICKETS</span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>VENUE ADDRESS</span>
                    </a>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="mright">
                    <div className="mint_time">
                      <h4>Handled By:</h4>
                      <h6 className="metaportal_fn_countdown">
                        Mr Sreehari C P, Security Analyst, TCS.
                      </h6>
                    </div>
                    <div className="mint_checked">
                      <h4>Fee Details:</h4>
                      <p>
                        <span className="text">Non - IEEE:</span>
                        <span className="status">
                          Rs. 900{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                      <p>
                        <span className="text">IEEE:</span>
                        <span className="status">
                          Rs. 700{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="mint_info">
                      <p>Payment should be lorem10</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* !Mint Box */}
            </div>
          </div>
        </>
      );
    } else if (type == 2) {
      return (
        <>
          <div className="metaportal_fn_mintpage">
            <div className="container small">
              {/* Mint Top */}
              <div className="metaportal_fn_mint_top">
                <div className="mint_left">
                  <div className="img">
                    <div className="img_in" data-bg-img="/img/about/1.jpg">
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="metaportal_fn_breadcrumbs">
                    <p>
                      <Link to="/">
                        <a>Home</a>
                      </Link>
                      <span className="separator">/</span>
                      <span className="current">Capture The Flag</span>
                    </p>
                  </div>
                  <h3
                    className="fn__maintitle"
                    data-text="Robotics"
                    data-align="left"
                  >
                    Robotics
                  </h3>
                  <div className="desc">
                    <p>
                      Capture The Flag (CTF) is a kind of information security
                      competition that challenges contestants to solve a variety
                      of tasks ranging from basic programming exercises, to
                      hacking your way into a server to steal data. In these
                      challenges, the contestant is usually asked to find a
                      specific piece of text that may be hidden on the server or
                      behind a webpage. This goal is called the flag.
                    </p>
                    <p>
                      CTFs provide a list of challenges and award points to
                      individuals or teams that complete the challenges, groups
                      with the most points wins.CTFs can be played as an
                      individual or in teams so feel free to get your friends
                      onboard!
                    </p>
                    <p>
                      This Capture The Flag (CTF) of IMPULSE 4.0 is a
                      self-developed platform by our student members to make the
                      participants understand the concepts of network security
                      and Ethical Hacking in an interactive and fun mode. So
                      stay tuned to Explore this extravaganza.
                    </p>
                  </div>
                </div>
              </div>
              {/* !Mint Top */}
              {/* Mint Box */}
              <div className="metaportal_fn_mintbox">
                <div className="mint_left">
                  <div className="mint_title">
                    <span>INFO</span>
                  </div>
                  <div className="mint_list">
                    <ul>
                      <li>
                        <div className="item">
                          <h4>Date</h4>
                          <h3>MARCH 13, 14 & 15</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Place</h4>
                          <h3>CCF - LAB FISAT</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Location</h4>
                          <h3>Angamaly, Kerala</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mint_desc">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>BUY TICKETS</span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>VENUE ADDRESS</span>
                    </a>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="mright">
                    <div className="mint_time">
                      <h4>Handled By:</h4>
                      <h6 className="metaportal_fn_countdown">
                        Mr Sreehari C P, Security Analyst, TCS.
                      </h6>
                    </div>
                    <div className="mint_checked">
                      <h4>Fee Details:</h4>
                      <p>
                        <span className="text">Non - IEEE:</span>
                        <span className="status">
                          Rs. 900{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                      <p>
                        <span className="text">IEEE:</span>
                        <span className="status">
                          Rs. 700{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="mint_info">
                      <p>Payment should be lorem10</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* !Mint Box */}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="metaportal_fn_mintpage">
            <div className="container small">
              {/* Mint Top */}
              <div className="metaportal_fn_mint_top">
                <div className="mint_left">
                  <div className="img">
                    <div className="img_in" data-bg-img="/img/about/1.jpg">
                      <img src="/img/1x1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="metaportal_fn_breadcrumbs">
                    <p>
                      <Link to="/">
                        <a href="/">Home</a>
                      </Link>
                      <span className="separator">/</span>
                      <span className="current">Capture The Flag</span>
                    </p>
                  </div>
                  <h3
                    className="fn__maintitle"
                    data-text="Hybrid"
                    data-align="left"
                  >
                    Hybrid
                  </h3>
                  <div className="desc">
                    <p>
                      Capture The Flag (CTF) is a kind of information security
                      competition that challenges contestants to solve a variety
                      of tasks ranging from basic programming exercises, to
                      hacking your way into a server to steal data. In these
                      challenges, the contestant is usually asked to find a
                      specific piece of text that may be hidden on the server or
                      behind a webpage. This goal is called the flag.
                    </p>
                    <p>
                      CTFs provide a list of challenges and award points to
                      individuals or teams that complete the challenges, groups
                      with the most points wins.CTFs can be played as an
                      individual or in teams so feel free to get your friends
                      onboard!
                    </p>
                    <p>
                      This Capture The Flag (CTF) of IMPULSE 4.0 is a
                      self-developed platform by our student members to make the
                      participants understand the concepts of network security
                      and Ethical Hacking in an interactive and fun mode. So
                      stay tuned to Explore this extravaganza.
                    </p>
                  </div>
                </div>
              </div>
              {/* !Mint Top */}
              {/* Mint Box */}
              <div className="metaportal_fn_mintbox">
                <div className="mint_left">
                  <div className="mint_title">
                    <span>INFO</span>
                  </div>
                  <div className="mint_list">
                    <ul>
                      <li>
                        <div className="item">
                          <h4>Date</h4>
                          <h3>MARCH 13, 14 & 15</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Place</h4>
                          <h3>CCF - LAB FISAT</h3>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <h4>Location</h4>
                          <h3>Angamaly, Kerala</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mint_desc">
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>BUY TICKETS</span>
                    </a>
                    <a
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="metaportal_fn_button"
                    >
                      <span>VENUE ADDRESS</span>
                    </a>
                  </div>
                </div>
                <div className="mint_right">
                  <div className="mright">
                    <div className="mint_time">
                      <h4>Handled By:</h4>
                      <h6 className="metaportal_fn_countdown">
                        Mr Sreehari C P, Security Analyst, TCS.
                      </h6>
                    </div>
                    <div className="mint_checked">
                      <h4>Fee Details:</h4>
                      <p>
                        <span className="text">Non - IEEE:</span>
                        <span className="status">
                          Rs. 900{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                      <p>
                        <span className="text">IEEE:</span>
                        <span className="status">
                          Rs. 700{" "}
                          <span className="icon">
                            <img
                              src="/svg/checked.svg"
                              alt=""
                              className="fn__svg"
                            />
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="mint_info">
                      <p>Payment should be lorem10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return <div>{workShopType(1)}</div>;
};

export default WorkShopView;
