const Social = () => {
    return (
      <div id="social" className="hold">
        <div className="social">
          <h4 className="title">Follow Us:</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-logo-wrapper">
                  <img src="/img/instagram.png" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <div className="social-logo-wrapper">
                  <img src="/img/facebook.png" alt="" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-logo-wrapper">
                  <img src="/img/twitter.png" alt="" />
                </div>
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Ln.
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    );
  };
  export default Social;
  