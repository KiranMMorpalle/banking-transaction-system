import { Col, Row } from "reactstrap";
import CourseCard from "../../components/course/CourseCard";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="text-end">
        <Link to="/courses/add" className="btn btn-primary mb-3 ">
          Add New Course
        </Link>
      </div>
      <Row className="g-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <Col md={6} lg={4} xxl={3} key={index}>
            <CourseCard />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Course;
