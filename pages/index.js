import Head from 'next/head';

const pageTitle = "YRA Solution"
const pageDescription = "Working from heights since 2014"
const siteUrl = "https://yrasolution.com"

const Index = (props) => (<>
  <Head>
  <title>{pageTitle}</title>

  <meta name="description" content={pageDescription} />

  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=0" />

  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <script src="/js/vendor/modernizr-2.7.1.min.js" />
  </Head>
  <div id="menu" className="body-page">
  <div className="page-loader" id="page-loader">
    <div>
      <div className="icon ion-spin"></div>
      <p>loading</p>
    </div>
  </div>

  <header className="page-header navbar page-header-alpha scrolled-white">
    <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
      <span className="menu-icon menu-icon-normal">
        <span className="bars">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </span>
      </span>
    </button>

    <a className="navbar-brand" href="./#">
      <span className="logo">
        <img className="light-logo" src="/img/logo.png" alt="Logo" />
      </span>
    </a>

    <div className="all-menu-wrapper" id="navbarMenu">
      <nav className="navbar-topmenu">
        <ul className="navbar-social d-none d-lg-block">
          <li className="nav-item">
            <a href="//facebook.com/miradontsoa" className="btn-social">
              <i className="icon fa fa-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="//twitter/miradontsoa" className="btn-social">
              <i className="icon fa fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="//instagram.com/miradontsoa" className="btn-social">
              <i className="icon fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-mainmenu">
        <div className="click-exit"></div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="./index.html#home">About
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./gallery.html">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./item.html">Item</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./index.html#home">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./demo.html">Demo</a>
          </li>
        </ul>
        <div className="menu-social">
          <p className="note">Website made by
            <a href="//highhay.com">
              <span className="marked">Miradontsoa</span>
            </a>
          </p>
          <ul className="social">
            <li>
              <a href="//facebook.com/miradontsoa">
                <i className="icon fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="//twitter/miradontsoa">
                <i className="icon fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="//instagram.com/miradontsoa">
                <i className="icon fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar-sidebar font-primary">
        <ul className="navbar-nav" id="qmenu">
          <li className="nav-item" data-menuanchor="home">
            <a href="#home">
              <span className="icon">H</span>
              <span className="txt">Home</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="about">
            <a href="#about">
              <span className="icon">A</span>
              <span className="txt">About</span>
            </a>
          </li>
          <li className="nav-item" data-menuanchor="contact">
            <a href="#contact">
              <span className="icon">C</span>
              <span className="txt">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div className="page-cover">
    <div id="container" className="video-container d-none d-sm-block">
      <video autoplay="autoplay" loop="loop" muted="muted" width="640" height="360">
        <source src="./vid/loop-bg.mp4" type="video/mp4" />
      </video>
    </div>


    <div className="cover-bg-mask bg-color" data-bgcolor="rgba(29, 29, 29, 0.2)"></div>
  </div>

  <div className="cover-frame">
    <div className="sides"></div>
  </div>

  <main className="page-main page-fullpage main-anim" id="mainpage">
    {/* Begin of home section */}
    <div className="section section-home fullscreen-md fp-auto-height-responsive main-home border-sm section-centered"
    data-section="home">
      {/* Begin of section wrapper */}
      <div className="section-wrapper fullwidth with-margin v-center">
        {/* content */}
        <div className="section-content anim">
          <div className="row">
            <div className="col-12 col-lg-8 text-left">
              {/* title */}
              <div className="title-desc">
                <h1 className="display-4 display-title display-decor home-title text-slide-in anim-1-off">Style &amp;
                  <br />Design.</h1>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-left">
              {/* description */}
              <div className="title-desc">
                <p className="anim-4">We are the best home designer in town.</p>
              </div>

              {/* Action button */}
              <div className="btns-action anim-5">
                <a href="#contact" className="btn btn-social">
                  <i className="icon fa fa-phone"></i>
                </a>
                <a className="btn btn-arrow btn-primary" href="#about">
                  <span className="icon">
                    <span className="arrow-right"></span>
                  </span>
                  <span className="text">About</span>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Arrows scroll down/up */}
        <footer className="section-footer scrolldown">
          <a className="down">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-down"></span>
              </span>
            </span>
          </a>
        </footer>
      </div>
      {/* End of section wrapper */}
    </div>
    {/* End of home section */}

    {/* Begin of description section */}
    <div className="section section-description fp-auto-height-responsive " data-section="about">
      <div className="section-cover-tier left fit bg-img" data-image-src="/img/items/img-sample2.jpg">
      </div>
      {/* Begin of section wrapper */}
      <div className="section-wrapper fullwidth fullheight with-margin center-lg-v padding-wrapper-topbottom">

        {/* content */}
        <div className="section-content anim">
          <div className="row  justify-content-between">
            <div className="col-12 col-lg-4">
            </div>

            <div className="col-12 col-lg-6 text-left center-v">
              <div className="wrapper">
                {/* title and description */}
                <div className="title-desc">
                  <h2 className="display-4 display-title display-decor anim-1">Savoir Faire</h2>
                  <p className="anim-2 desc-decor">This describes what we do and what is our mission. Lorem ipsum
                    magicum dolor sit amet, consectetur adipiscing elit. Maecenas
                    a sem ultrices neque vehicula fermentum a sit amet nulla.
                  </p>
                </div>

                {/* Action button */}
                <div className="btns-action anim-3">
                  <a href="//instagram.com/" className="btn btn-social">
                    <i className="icon fa fa-instagram"></i>
                  </a>
                  <a href="//youtube.com/" className="btn btn-social">
                    <i className="icon fa fa-play"></i>
                  </a>

                  <a className="btn btn-outline btn-primary" href="#services">
                    <span className="text">Services</span>
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Arrows scroll down/up */}
        <footer className="section-footer scrolldown">
          <a className="up">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-up"></span>
              </span>
            </span>
          </a>
          <a className="down">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-down"></span>
              </span>
            </span>
          </a>
        </footer>
      </div>
      {/* End of section wrapper */}
    </div>
    {/* End of description section */}

    {/* Begin of description section */}
    <div className="section section-description fp-auto-height-responsive " data-section="about-more">
      <div className="section-cover-tier right fit bg-img" data-image-src="/img/items/img-person.jpg">
      </div>
      {/* Begin of section wrapper */}
      <div className="section-wrapper fullwidth fullheight with-margin center-lg-v padding-wrapper-topbottom">

        {/* content */}
        <div className="section-content anim">
          <div className="row  justify-content-between">

            <div className="col-12 col-lg-6 text-left center-v">
              <div className="wrapper">
                {/* title and description */}
                <div className="title-desc">
                  <h2 className="display-4 display-title display-decor anim-1">Qui suis-je?</h2>
                  <p className="anim-2 desc-decor">This describes what we do and what is our mission. Lorem ipsum
                    magicum dolor sit amet, consectetur adipiscing elit. Maecenas
                    a sem ultrices neque vehicula fermentum a sit amet nulla.
                  </p>
                </div>

                {/* Action button */}
                <div className="btns-action anim-3">
                  <a href="//twitter.com/miradontsoa" className="btn btn-social">
                    <i className="icon fa fa-twitter"></i>
                  </a>
                  <a href="//linkedin.com/miradontsoa" className="btn btn-social">
                    <i className="icon fa fa-linkedin"></i>
                  </a>
                  <a className="btn btn-outline btn-primary" href="#services">
                    <span className="text">Services</span>
                    <span className="icon">
                      <span className="arrow-right"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
            </div>

          </div>
        </div>

        {/* Arrows scroll down/up */}
        <footer className="section-footer scrolldown">
          <a className="up">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-up"></span>
              </span>
            </span>
          </a>
          <a className="down">
            <span className="btn btn-arrow">
              <span className="icon">
                <span className="arrow-down"></span>
              </span>
            </span>
          </a>
        </footer>
      </div>
      {/* End of section wrapper */}
    </div>
    {/* End of description section */}

    {/* Begin of contact section */}
    <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact">
      <div className="section-cover-tier right fit bg-img" data-image-src="./img/items/img-sample2-square.jpg">
      </div>

      {/* begin of information slide */}
      <div className="slide" id="information" data-anchor="information">
        {/* Begin of slide section wrapper */}
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          {/* content */}
          <div className="section-content fullwidth anim text-left">
            {/* main content */}
            <div className="row justify-content-between">
              <div className="col-12 col-md-8 col-lg-6  text-left center-v">
                <div className="f-wrapper">
                  {/* title and description */}
                  <div className="title-desc">
                    <div className="anim-2">
                      <h2 className="display-4 display-title display-decor">Contact</h2>
                      <p className="desc-decor">For questions about our company and products found on our stores,
                        just contact us.</p>
                    </div>
                    <div className="address-container anim-3">

                      <div className="row">
                        <div className="col-12 col-md-12 col-xl-6">
                          <h4>Contact</h4>
                          <p className="mb-0">
                            +0 1 234 567 89
                            <br />ouremail@domain.com
                          </p>
                        </div>
                        <div className="col-12 col-md-12 col-xl-6">
                          <h4>Address</h4>
                          <p className="mb-0">12 Street Turning Place
                            <br />South Est, Antartica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="btns-action anim-4">
                    <a href="//twitter.com/miradontsoa" className="btn btn-social">
                      <i className="icon fa fa-twitter"></i>
                    </a>
                    <a href="//linkedin.com/miradontsoa" className="btn btn-social">
                      <i className="icon fa fa-linkedin"></i>
                    </a>

                    <a className="btn btn-arrow btn-primary" href="#contact/message">
                      <span className="icon">
                        <span className="arrow-right"></span>
                      </span>
                      <span className="text">Send Message</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-none d-md-block col-12 col-md-4 col-lg-4">
              </div>
            </div>

          </div>

        </div>
        {/* End of slide section wrapper */}

        {/* begin of slide footer */}
        <div className="slide-footer section-footer footer-register">
          <form className="send_email_form form-container form-container-transparent form-container-white"
          method="post" action="ajaxserver/serverfile.php">
            <div className="form-desc">
              {/* Optioanl text here */}
              {/* <p className="invite">Register email to newsletter :</p> */}
            </div>
            <div className="form-input">
              <div className="form-group form-success-gone">
                {/* <label for="reg-email">Email</label> */}
                <div className="f-input">
                  <input id="reg-email" name="email" className="form-control form-control-outline form-control-white"
                  type="email" required placeholder="your@email.address" data-validation-type="email"
                  />
                  <div className="btns-action">
                    <button id="submit-email" name="submit_email" className="btn btn-arrow btn-primary form-success-gone">
                      <span className="icon">
                        <i className="ion ion-checkmark"></i>
                      </span>
                      <span className="text">Register to newsletter</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0">
                <div>
                  <p className="email-ok invisible form-text-feedback form-success-visible">Your email has been registred, thank you.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* end of slide footer */}
      </div>


      {/* begin of message slide */}
      <div className="slide" id="message" data-anchor="message">
        {/* Begin of slide section wrapper */}
        <div className="section-wrapper fullwidth fullheight center-lg-v with-margin padding-wrapper-topbottom">
          {/* main content */}
          <div className="row  justify-content-between">
            <div className="col-12 col-md-12 col-lg-7 col-xl-6">
              {/* content */}
              <div className="section-content fullwidth anim text-left">
                {/* title and description */}
                <div className="title-desc">
                  <div className="anim-2">
                    <h2 className="display-4 display-title display-decor">Email Us</h2>
                    <p className="desc-decor">For questions about our company and products found on our stores.
                      Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis
                      dui. Fusce in urna sem.</p>
                  </div>
                </div>
                {/* begin of message container */}
                <div className="message-form">
                  <div className="form-container form-container-card">
                    {/* Message form container */}
                    <form className="send_message_form message form" method="post" action="ajaxserver/serverfile.php"
                    id="message_form">
                      <div className="form-group name">
                        <input id="mes-name" name="name" type="text" placeholder="Name" className="form-control form-control-outline thick form-success-clean"
                        required />
                      </div>
                      <div className="form-group email">
                        <input id="mes-email" type="email" placeholder="Email" name="email" className="form-control form-control-outline thick form-success-clean"
                        required />
                      </div>
                      <div className="form-group no-border">
                        <textarea id="mes-text" placeholder="Message ..." name="message" className="form-control form-control-outline thick form-success-clean"
                        required></textarea>

                        <div>
                          <p className="message-ok invisible form-text-feedback form-success-visible">Your message has been sent, thank you.</p>
                        </div>
                      </div>

                      <div className="btns text-left d-flex justify-content-between">

                        <a className="btn btn-arrow" href="#contact/information">
                          <span className="icon">
                            <span className="arrow-left"></span>
                          </span>
                          <span className="text">Information</span>
                        </a>
                        <button id="submit-message" className="btn btn-outline email_b" name="submit_message">
                          <span className="txt">Send Now</span>
                          <span className="arrow-icon"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* end of message container */}

              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
            </div>
          </div>


          {/* aside content */}
          <div className="section-aside aside-bottom anim small-relative">

          </div>
        </div>
        {/* End of slide section wrapper */}
      </div>




      {/* Arrows scroll down/up */}
      <footer className="section-footer scrolldown">
        <a className="up">
          <span className="btn btn-arrow">
            <span className="icon">
              <span className="arrow-up"></span>
            </span>
          </span>
        </a>
      </footer>
    </div>
    {/* End of contact section */}
  </main>
  {/* END OF page main content */}

  {/* BEGIN OF page footer */}
  <footer id="site-footer" className="page-footer">

    {/* Right content */}
    <div className="footer-right">
      <p className="note">DESIGNED BY
        <a href="https://themeforest.com/user/mivfx/portfolio">
          <span className="marked">MIVFX</span>
        </a>
      </p>
      <ul className="social-text">
        <li>
          <a href="//facebook.com/miradontsoa">Fb</a>
        </li>
        <li>
          <a href="//twitter/miradontsoa">Tw</a>
        </li>
        <li>
          <a href="//instagram.com/miradontsoa">In</a>
        </li>
      </ul>
    </div>
  </footer>
  {/* END OF site footer */}

  {/* scripts */}
  {/* All Javascript plugins goes here */}
  <script src="/js/vendor/jquery-1.12.4.min.js"></script>
  <script src="/js/slick/slick.min.js"></script>

  {/* All vendor scripts */}
  <script src="/js/vendor/parallax.min.js"></script>
  <script src="/js/vendor/scrolloverflow.min.js"></script>
  <script src="/js/vendor/all.js"></script>

  {/* Javascript main files */}
  <script src="/js/main.js"></script>
  </div>

</>);


export default Index;