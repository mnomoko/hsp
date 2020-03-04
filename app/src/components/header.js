import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-navbar py-0 js-sticky-header site-navbar-target" role="banner" style={{ background: `#FF8E00` }}>
    {/*<div className="container">*/}
      <div className="row align-items-center ml-2">
        <div className="col-6 col-xl-2">
          <h1>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }}>
              {siteTitle}
            </Link>
          </h1>
        </div>

        <div className="col-12 col-md-10 d-none d-xl-block">
          <nav className="site-navigation position-relative text-right" role="navigation">

            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><a href="#home-section" className="nav-link">Accueil</a></li>
              <li><a href="#mission-section" className="nav-link">Notre&nbsp;mission</a></li>
              <li><a href="#why-us-section" className="nav-link">Pourquoi&nbsp;nous</a></li>
              <li><a href="#clients-section" className="nav-link">Nos clients</a></li>
              <li><a href="#about-section" className="nav-link">A propos</a></li>
              <li><a href="#contact-section" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    {/*</div>*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
