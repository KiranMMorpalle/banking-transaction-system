import { Col, Row } from "reactstrap";
import SubSectionTitle from "../../reusables/SubSectionTitle";
import { FiBook, FiMail, FiMap, FiPhone } from "react-icons/fi";
import InfoCard from "./InfoCard";
import Certificate from "./Certificate";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactInfo = [
    {
      Icon: FiMap,
      title: "Main Office",
      info: <p> 2972 Westheimer Rd. Santa Ana, Illinois 85486</p>,
      linkText: "Find Location",
      linkUrl: "https://maps.google.com",
    },
    {
      Icon: FiMail,
      title: "Email Address",
      info: (
        <>
          <p className="mb-1">infoexample@gmail.com</p>
          <p>example@gmail.com</p>
        </>
      ),
      linkText: "Get In Touch",
      linkUrl: "mailto:infoexample@gmail.com",
    },
    {
      Icon: FiPhone,
      title: "Phone Number",
      info: (
        <>
          <p className="mb-1"> (505) 555-0125</p>
          <p>(406) 555-0120</p>
        </>
      ),
      linkText: "Contact Us Today!",
      linkUrl: "#",
    },
  ];
  return (
    <>
      <section className="container mb-5">
        <SubSectionTitle
          description="Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning"
          title="Let us help you"
          Icon={FiBook}
          name="Get In Touch"
        />
        <div>
          <Row>
            {contactInfo.map((info, index) => (
              <Col md={4} key={index} className="mb-3">
                <InfoCard {...info} />
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <ContactForm />
      <Certificate />
    </>
  );
};

export default ContactSection;
