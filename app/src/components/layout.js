/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../css/jquery-ui.css"
import "../css/icomoon.style.css"
import "bootstrap/dist/css/bootstrap.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    document.body.setAttribute('data-offset', '300');
    document.body.setAttribute('data-spy', 'scroll');
    document.body.setAttribute('data-target', '.site-navbar-target');
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: false
    });
  });

  return (
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


      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>


      <div className="site-wrap">

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>


        <footer className="site-footer">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved by Hotel Service Plus
                </p>

              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
