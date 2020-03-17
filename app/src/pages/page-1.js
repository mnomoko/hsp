import React from "react"
import Img from "gatsby-image";

const Page1 = ({ data }) => {
  console.log(data)
  if(data) {
    return (
      <section className="site-section" id="mission-section" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title-body">Notre mission</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
              <figure className="circle-bg">
                <div className="unit-4-icon mr-4"><span className="text-primary flaticon-care"></span></div>
                <Img fluid={data.bgImg.childImageSharp.fluid} />
              </figure>
            </div>
            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-4">
                <h3 className="h3 mb-4 text-black">HOTEL SERVICES PLUS</h3>
                <p>Nous somme une centrale de réservation d’hébergement</p>
                <p>Nous proposons nos services aux collectivités et aux différents organismes du secteur social, ainsi
                  qu’aux
                  entreprises.</p>

              </div>

              <div className="mb-4">
                <ul className="list-unstyled ul-check success">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                </ul>

              </div>

            </div>
          </div>
          <div className="row col-12">
            {data.allStrapiMission.edges.map(document => (
              <div className="col-md-4 col-sm-12" key={document.node.id}>
                <Img className="img-mission" fluid={document.node.picture.childImageSharp.fluid}/>
                <h3 className="h3 mb-4 text-black">{document.node.title}</h3>
                <p>{document.node.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  else return null;
};

export default Page1;
