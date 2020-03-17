import React from "react"

const Page3 = ({data}) => {
  if (data) {
    return (
      <section className="site-section" id="clients-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title-body">Nos Clients</h2>
            </div>

            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4">
                  <h3 className="h3 mx-2 mb-4 text-black">Collectivités</h3>
                </div>

                <div className="mb-4">
                  <ul className="list-unstyled ul-check success">
                    {data.allStrapiClient.edges.filter(doc => doc.node.type === 'collectivite').map(doc => (
                      <li key={doc.node.id}>{doc.node.texte}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4">
                  <h3 className="h3 mx-2 mb-4 text-black">Associations</h3>
                </div>

                <div className="mb-4">
                  <ul className="list-unstyled ul-check success">
                    {data.allStrapiClient.edges.filter(doc => doc.node.type === 'association').map(doc => (
                      <li key={doc.node.id}>{doc.node.texte}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="mb-4">
                  <h3 className="h3 mx-2 mb-4 text-black">Organismes collecteurs du 1% patronal</h3>
                </div>

                <div className="mb-4">
                  <ul className="list-unstyled ul-check success">
                    {data.allStrapiClient.edges.filter(doc => doc.node.type === 'organisme').map(doc => (
                      <li key={doc.node.id}>{doc.node.texte}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
  else return null;
};

export default Page3;
