import { Link, withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet";

const Header = ({ siteTitle }) => (

  <>
    <Helmet>
      <script src={withPrefix('jquery-3.3.1.min.js')} type="text/javascript" />
      <script src={withPrefix('jquery-ui.js')} type="text/javascript" />
      <script src={withPrefix('popper.min.js')} type="text/javascript" />
      <script src={withPrefix('bootstrap.min.js')} type="text/javascript" />
      <script src={withPrefix('owl.carousel.js')} type="text/javascript" />
      <script src={withPrefix('jquery.countdown.min.js')} type="text/javascript" />
      <script src={withPrefix('jquery.easing.1.3.js')} type="text/javascript" />
      <script src={withPrefix('aos.js')} type="text/javascript" />
      <script src={withPrefix('jquery.sticky.js')} type="text/javascript" />
      <script src={withPrefix('isotope.pkgd.js')} type="text/javascript" />
      <script src={withPrefix('main.js')} type="text/javascript" />
    </Helmet>
    {/*<div id="sticky-wrapper" className="sticky-wrapper" style={{height: '85.0938px'}}>*/}
      <header className="site-navbar py-2 js-sticky-header site-navbar-target" role="banner"
              style={{background: `#FF8E00`}}>

        {/*<div className="container">*/}
        <div className="row align-items-center ml-2">
          <div className="col-6 col-xl-2">
            <h1>
              <Link to="/" style={{color: `white`, textDecoration: `none`,}}>
                {siteTitle}
              </Link>
            </h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                {/*<li><a href="#home-section" className="nav-link">Accueil</a></li>*/}
                <li><a href="#mission-section" className="nav-link">Notre&nbsp;mission</a></li>
                <li><a href="#why-us-section" className="nav-link">Pourquoi&nbsp;nous</a></li>
                <li><a href="#clients-section" className="nav-link">Nos clients</a></li>
                <li><a href="#about-section" className="nav-link">A propos</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}><a
            href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>

          </div>
        </div>
        {/*</div>*/}
      </header>
    {/*</div>*/}
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
