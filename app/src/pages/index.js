import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Page1 from "./page-1";
import Page2 from "./page-2";
import Page3 from "./page-3";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import "../css/style.css";
import background from "../images/hero_2.jpg"
import Page4 from "./page-4";
import Page5 from "./page-5";

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="Home"/>
      <div>
        <div className="site-blocks-cover overlay mt-5" style={{backgroundImage: `url(${background})`}} data-aos="fade"
             id="home-section">

          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8 mt-lg-5 text-center">
                <h1 className="text-uppercase" data-aos="fade-up">Hotel Service Plus</h1>
                <p className="mb-5 desc" data-aos="fade-up" data-aos-delay="100">L'hébergement digne et resposable</p>
              </div>
            </div>
          </div>

          <a href="#about-section" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
          </a>
        </div>
        <Page1 data={data}/>
        <Page2 data={data}/>
        <Page3 data={data}/>
        <Page4 data={data}/>
        <Page5/>
      </div>
    </Layout>
  );
};

export default IndexPage

export const pageQuery = useStaticQuery(graphql`
  {
    allStrapiMission {
      edges {
        node {
          id
          title
          content
          picture {
            childImageSharp {
              fluid(maxWidth: 300, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiClient {
      edges {
        node {
          id
          texte
          type
        }
      }
    }
    allStrapiService {
      edges {
        node {
          id
          title
          description
        }
      }
    }
    strapiAbout(strapiId: {eq: 1}) {
      id
      texte
    }
    bgImg: file(relativePath: { eq: "hero_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
