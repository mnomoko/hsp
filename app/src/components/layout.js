/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../css/jquery-ui.css"
import "bootstrap/dist/css/bootstrap.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">


        <div className="site-wrap">

          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
        </div>
        <main>{children}</main>
      </body>


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

      <script src="../js/jquery.js"></script>
      <script src="../js/jquery.sticky.jsy"></script>
      <script src="../js/jquery-ui.js"></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
