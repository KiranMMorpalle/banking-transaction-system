import type { ICoursePayload } from "@kiranmmorpalle/common-types";
import CourseForm from "../../components/course/CourseForm";

const initialValues: ICoursePayload = {
  name: "",
  image: "",
  summery: "",
  details: "",
  price: 0,
  level: "",
  category: "",
  instructor: "",
  faqs: [],
  lessons: [],
  publish: false,
};

const AddCourse = () => {
  return <CourseForm initialValues={initialValues} />;
};

export default AddCourse;
