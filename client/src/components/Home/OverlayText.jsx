import React from "react";
import k1 from "./khanan/khanan.jpg";
import k2 from "./khanan/khanan1.jpg";
import k3 from "./khanan/khanan2.jpg";
import Countdown from "./Countdown";
import { Container, Row, Col } from "reactstrap";

const OverlayText = (props) => {
  return (
    <div className="khanan-overlay py-5">
      <h1 className="text-white text-center text-uppercase khanan-content heading">
        khanan
      </h1>
      <Container className="p-4 rounded khanan-content">
        <Row className="justify-content-between">
          <Col xs="12" lg="6">
            <div className="img-container mb-1">
              <img src={k1} alt="Khanan" className="k k1" />
              <img src={k2} alt="Khanan" className="k k2" />
              <img src={k3} alt="Khanan" className="k k3" />
            </div>
          </Col>
          <Col xs="12" lg="5" className="text-white">
            <div className="mt-3">
              <p className="h2 pt-3">
                Participate in the Biggest Mining fest in India and fell into
                the invigorating world of Mining.
              </p>
              <br />
              <p className="h5">
                You will be provided with a platform that presents your talent
                to the world and help you enhance and learn skills. Many
                esteemed guests are willing to share their knowledge are you
                willing to take it?
              </p>
              <div className="text-center h1">
            {/* <Countdown /> */}
          </div>
              <a className="bt bt-white khanan-bt" href="/events/khanan">
                Register Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OverlayText;
