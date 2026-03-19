import { Col, Row } from "reactstrap";
import CustomLink from "../../reusables/CustomLink";

const Certificate = () => {
  return (
    <div className="container-fluid rounded">
      <Row className="certificate bg-primary-blue rounded-4 position-relative">
        <Col lg={6}>
          <h5 className="fw-bold mb-3">Get Certificate</h5>
          <h1 className="fw-bold mb-5">
            Get Quality Skills Certificate From the{" "}
            <span className="primary-orange">Spark</span>
          </h1>
          <CustomLink
            href="/contact"
            text="Get Started Now"
            variant="secondary"
          />
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <img src="/images/certificate-img.png" />
        </Col>
      </Row>
    </div>
  );
};

export default Certificate;
