import { CustomSwal } from "@kiranmmorpalle/common-types";
import toast from "react-hot-toast";
import { FiBarChart, FiStar, FiTrash, FiVideo } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";

const CourseCard = () => {
  const deleteHandler = async () => {
    const result = await CustomSwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
    });
    if (result.isConfirmed) {
      toast.success("Your course has been deleted.");
    }
  };

  return (
    <Link to={"/courses/edit/1"}>
      <Card className="rounded-4 overflow-hidden">
        <div className="ratio ratio-16x9">
          <img
            src="https://reactjs.eduall.wowtheme7.com/assets/images/thumbs/course-img1.png"
            alt="image"
            className="image-fluid  object-fit-cover"
          />
        </div>
        <div className="p-2">
          <h4>course title</h4>
          <div className="border-bottom pb-3 mb-2">
            <Row className="g-3">
              <Col sm={6}>
                <FiVideo /> 20 Lessons
              </Col>
              <Col sm={6}>
                <FiBarChart /> Beginner
              </Col>
              <Col sm={6}>
                <FiStar color="orange" /> 4.7
              </Col>
              <Col sm={6}>
                <img src="/images/avtar.png" width={30} /> Omkar
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-4 fw-bolder text-warning">₹ 4000</span>
            <FiTrash
              className="text-danger"
              onClick={(e) => {
                e.preventDefault(); // stops Link navigation
                e.stopPropagation(); // stops bubbling
                deleteHandler();
              }}
            />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CourseCard;
