import { useParams } from "react-router-dom";
import CourseForm from "../../components/course/CourseForm";
import useCourseResolver from "../../resolvers/CourseResolver";
import { Alert } from "reactstrap";

const EditCourse = () => {
  const { id } = useParams<{ id: string }>();
  const { courseById } = useCourseResolver({ courseId: id });

  if (!courseById) {
    return <Alert variant="danger">Course not found</Alert>;
  }
  return (
    <CourseForm
      initialValues={{ ...courseById, instructor: courseById?.instructor?._id }}
    />
  );
};

export default EditCourse;
