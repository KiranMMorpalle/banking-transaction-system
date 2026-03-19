import { Col, Row } from "reactstrap";
import SubSectionTitle from "../../reusables/SubSectionTitle";
import { FiBookOpen, FiCheckSquare } from "react-icons/fi";
import CustomLink from "../../reusables/CustomLink";

const AboutInfo = () => {
  const missionVision = [
    {
      title: "Our Mission",
      description:
        "Driven by a team of dedicated educators, technologists, and visionaries, we strive to create a supportive",
      Icon: FiBookOpen,
    },
    {
      title: "Our Vision",
      description:
        "A professional seeking to upskill, or a lifelong learner exploring new horizons, we're here to accompany you every step of the way.",
      Icon: FiCheckSquare,
    },
  ];
  return (
    <section className="container py-5">
      <Row className="align-items-center">
        <Col lg={6} className="mb-4">
          <Row>
            <Col md={6} className="mb-4 mb-md-0 text-center">
              <img
                src="/images/about-img1.png"
                className="img-fluid border-3"
              />
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-center gap-3">
                <div className="bg-primary-blue  text-white text-center rounded-2 p-3 mb-3">
                  <h1>16K</h1>
                  <p className="text-white">Total Students</p>
                </div>
                <div className="bg-primary-orange text-white text-center rounded-2 p-3 mb-3">
                  <h1>4K</h1>
                  <p className="text-white">Total Courses</p>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/images/about-img2.png"
                  className="img-fluid border-3"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="mb-4">
          <SubSectionTitle
            name="About Spark"
            title="The Place Where You Can Achieve"
            description="Welcome to Spark, where learning knows no bounds. Whether you're a student, professional, or lifelong learner..."
            className="text-start py-4"
          />
          <div className="border-bottom mb-4">
            {missionVision.map(({ title, description, Icon }, index) => (
              <div
                className="d-flex flex-column flex-md-row gap-3 mb-4"
                key={index}
              >
                {Icon && <Icon size={80} className="primary-blue me-3" />}
                <div>
                  <h4 className="fw-bold">{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <CustomLink text="Read More" href="/course" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutInfo;
