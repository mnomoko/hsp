import React from "react"
import ReactMarkdown from "react-markdown";

const Page4 = ({data}) => {
  const about = data.strapiAbout;
  return (
    <section className="site-section" id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title-body">A propos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <ReactMarkdown source={about.texte}></ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Page4
