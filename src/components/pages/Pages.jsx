import React, { useState, useEffect } from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
// import Disclaimer from "../disclaimer/disclaimer";
import Modal from "react-modal"; // Import react-modal
import "./style.css"; // Import the CSS file for styling

Modal.setAppElement("#root"); // Set the app element for modal accessibility

const Pages = () => {
  // const [isDisclaimerWatched, setIsDisclaimerWatched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility

  useEffect(() => {
    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, []); // Run only once when the component mounts

  return (
    <div className="pages-container">
      <Modal isOpen={isModalOpen}>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Disclaimer</h2>
              </div>
              <div className="modal-body">
                <p>
                  As per the rules of the Bar Council of India, lawyers and law
                  firms are not permitted to solicit their work or advertise in
                  any manner. By clicking on the “I Agree” button, the user
                  agrees and acknowledges as under:
                </p>
                <ul>
                  <li>
                    There has been no advertisement, personal communication,
                    solicitation, invitation or any other inducement of any sort
                    whatsoever by or on behalf of Legal Inkwell or any of its
                    members to solicit any work through this website.
                  </li>
                  <li>
                    All material and information (except any statutory
                    instruments or judicial precedents) on this website is the
                    property of Legal Inkwell, and no part thereof shall be
                    used, with or without adaptation, without the express prior
                    written consent or approval from Legal Inkwell.
                  </li>
                  <li>
                    The user(s) wishes to gain more information about Legal
                    Inkwell for his/her/their own information and use.
                  </li>
                  <li>
                    All information about Legal Inkwell on this website is being
                    provided to the user(s) only on his/her/their specific
                    request and any information obtained or materials downloaded
                    from this website is completely at the volition of user(s);
                    and any transmission, receipt or use of this site would not
                    create any lawyer-client relationship.
                  </li>
                  <li>
                    The information provided on this website is solely available
                    at the request of the user(s) for informational purposes
                    only. It should not be interpreted as a soliciting or
                    advertisement.
                  </li>
                  <li>
                    Legal Inkwell assumes no liability for the interpretation
                    and/or use of the information available on this website,
                    neither does it offer a warranty of any kind, nor express or
                    implicit authorization of the content included in
                    www.legalinkwell.com not even through a hyperlink, without
                    express and written consent from www.legalinkwell.com.
                  </li>
                  <li>
                    The content available on this website does not constitute,
                    and shall not be construed, as legal advice or a substitute
                    for legal advice.
                  </li>
                  <li>
                    Legal Inkwell is not liable for any consequence of any
                    action taken by the user(s) relying on material/information
                    provided on this website or through any external links
                    thereon.
                  </li>
                  <li>
                    This website is a resource for informational purposes only
                    and though intended, is not promised or guaranteed, to be
                    complete or updated. Legal Inkwell does not warrant that the
                    information contained on this website is accurate or
                    complete, and hereby disclaims any and all liability to any
                    person for any loss or damage caused by errors or omissions,
                    whether such errors or omissions result from negligence,
                    accident or any other cause.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(false)}>Accept </button>
      </Modal>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
