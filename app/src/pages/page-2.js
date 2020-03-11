import React from "react"
import ReactMarkdown from "react-markdown";

const Page2 = ({data}) => (
  <section className="site-section" id="why-us-section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center" data-aos="fade">
          <h2 className="section-title-body">Pourquoi nous ?</h2>
        </div>
      </div>
      <div className="row col-12">
        {data.allStrapiService.edges.map(document => (
          <div className="col-md-10 offset-md-1 col-sm-12 mb-4" key={document.node.id}>
            <h3 className="h3 mb-4 text-black">{document.node.title}</h3>
            <ReactMarkdown source={document.node.description}></ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Page2
