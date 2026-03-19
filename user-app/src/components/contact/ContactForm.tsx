import { Card, CardBody, Col, Row } from "reactstrap";
import SubSectionTitle from "../../reusables/SubSectionTitle";
import { FiBook } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";
import CustomLink from "../../reusables/CustomLink";

const ContactForm = () => {
  return (
    <section className="contact-form py-5">
      <div className="container ">
        <Row className="align-items-center">
          <Col lg={7}>
            <SubSectionTitle
              title="Have questions? don't hesitate to contact us"
              description="We are passionate about transforming lives through education. Founded with a vision to make learning accessible to all, we believe in the power of knowledge to unlock opportunities and shape the future."
              Icon={FiBook}
              name="Contact Us"
              className="text-start pb-5"
            />
            <div className="d-flex flex-column flex-sm-row gap-4">
              <div className="testimonial">
                {Array.from({ length: 6 }).map((_, i) => (
                  <img src="/images/avtar.png" key={i} />
                ))}
              </div>
              <div>
                <Rating initialValue={4.5} readonly allowFraction size={30} />
                <p>2.5k+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <Card>
              <CardBody>
                <div className="p-3 bg-primary-main rounded-2">
                  <h4>Get In Touch</h4>
                  <hr />
                  <form action="">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="text-center my-4">
                      <CustomLink text="Send Message" tag="button" />
                    </div>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactForm;
