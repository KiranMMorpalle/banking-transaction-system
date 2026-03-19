import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

interface ISectionHeading {
  name: string;
}

const SectionHeading = ({ name }: ISectionHeading) => {
  return (
    <section className="section-heading position-relative">
      <div className="container h-100 d-flex align-items-center justify-content-center flex-column">
        <h1>{name}</h1>
        <Breadcrumb listTag="div">
          <BreadcrumbItem>
            <Link to="/" className="d-flex align-items-center gap-1">
              <FiHome /> Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active className="primary-orange">
            {name}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <img
        src="/images/shape1.png"
        className="position-absolute shape shape1"
      />
      <img
        src="/images/shape2.png"
        className="position-absolute shape shape2"
      />
      <img
        src="/images/shape3.png"
        className="position-absolute shape shape3"
      />
    </section>
  );
};

export default SectionHeading;
