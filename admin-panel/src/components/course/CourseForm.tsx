import {
  renderFieldRowWithSizes,
  renderFormField,
  type ICoursePayload,
  type IFormRender,
} from "@kiranmmorpalle/common-types";
import { FieldArray, Formik, type FormikHelpers, Form } from "formik";
import { FiSave } from "react-icons/fi";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import * as Yup from "yup";

type Props = {
  initialValues: ICoursePayload;
};
const CourseForm = ({ initialValues }: Props) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    image: Yup.string().required("Image link is required"),
    summery: Yup.string(),
    details: Yup.string(),
    price: Yup.number().min(0, "Price cannot be negative"),
    level: Yup.string(),
    category: Yup.string(),
    instructor: Yup.string(),
    lessons: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Name is required"),
        video: Yup.string().required("Video link is required"),
        duration: Yup.string(),
      })
    ),
    faqs: Yup.array().of(
      Yup.object({
        question: Yup.string().required("Question is required"),
        answer: Yup.string().required("Answer is required"),
      })
    ),
    publish: Yup.boolean(),
  });

  const levelFieldOption = [
    { label: "Beginner", value: "Beginner" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Advanced", value: "Advanced" },
  ];

  const categoryFieldOption = [
    { label: "HTML CSS", value: "html-css" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "React", value: "React" },
    { label: "Node.js", value: "Node.js" },
    { label: "Python", value: "Python" },
    { label: "Data Science", value: "Data Science" },
    { label: "Machine Learning", value: "Machine Learning" },
    { label: "Design", value: "Design" },
    { label: "Marketing", value: "Marketing" },
  ];

  const renderBasicInfoFields = (
    value: ICoursePayload,
    setFieldValue: FormikHelpers<ICoursePayload>["setFieldValue"]
  ): IFormRender[] => {
    const levelFieldValue =
      levelFieldOption.find((option) => option.value === value.level) || null;

    const categoryFieldValue =
      categoryFieldOption.find((option) => option.value === value.category) ||
      null;

    return [
      {
        field: {
          id: "name",
          name: "name",
          type: "text",
          label: "Name",
        },
        colSize: "col-12",
      },
      {
        field: {
          id: "image",
          name: "image",
          type: "text",
          label: "Image Link",
        },
        colSize: "col-md-6",
      },
      {
        field: {
          id: "price",
          name: "price",
          type: "number",
          label: "Price",
          min: 0,
        },
        colSize: "col-md-6",
      },
      {
        field: {
          id: "summery",
          name: "summery",
          type: "textarea",
          label: "Summery",
        },
        colSize: "col-12",
      },
      {
        field: {
          id: "details",
          name: "details",
          type: "editor",
          label: "Details",
          value: value.details,
          onEditorChange: (value) => setFieldValue("details", value),
        },
        colSize: "col-12",
      },

      {
        field: {
          id: "level",
          name: "level",
          type: "multiSelect",
          label: "Level",
          onSelectChange: (value) =>
            setFieldValue("level", value?.[0]?.value || ""),
          options: levelFieldOption,
          value: levelFieldValue,
        },
        colSize: "col-md-6",
      },
      {
        field: {
          id: "category",
          name: "category",
          type: "multiSelect",
          label: "Category",
          onSelectChange: (value) =>
            setFieldValue("category", value?.[0]?.value || ""),
          options: categoryFieldOption,
          value: categoryFieldValue,
        },
        colSize: "col-md-6",
      },
      {
        field: {
          id: "instructor",
          name: "instructor",
          type: "multiSelect",
          label: "Instructor",
          onSelectChange: (value) =>
            setFieldValue("instructor", value?.[0]?.value || ""),
          options: [],
          value: null,
        },
        colSize: "col-md-6",
      },
      {
        field: {
          id: "publish",
          name: "publish",
          type: "checkbox",
          label: "Publish (Publish after completing all details)",
        },
        colSize: "col-md-6 d-flex align-items-end",
      },
    ];
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Submitted FAQs:", values);
        }}
      >
        {({ values, submitForm, setFieldValue }) => (
          <Form>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-3">Course Information</p>
              <Button color="success" onClick={submitForm}>
                <FiSave /> Save
              </Button>
            </div>

            <Card className="mb-2">
              <CardHeader>Basic Information</CardHeader>
              <CardBody>
                {renderFieldRowWithSizes(
                  renderBasicInfoFields(values, setFieldValue)
                )}
              </CardBody>
            </Card>

            <Card className="mb-2">
              <CardHeader>Lessons</CardHeader>
              <CardBody>
                <FieldArray name="lessons">
                  {({ push, remove }) => (
                    <>
                      {values.lessons.map((_, index) => (
                        <div key={index} className="border p-3 mb-3 rounded">
                          {renderFormField({
                            id: `lessons.${index}.name`,
                            name: `lessons.${index}.name`,
                            type: "text",
                            label: "Name",
                          })}
                          {renderFormField({
                            id: `lessons.${index}.video`,
                            name: `lessons.${index}.video`,
                            type: "text",
                            label: "Video Link",
                          })}
                          {renderFormField({
                            id: `lessons.${index}.duration`,
                            name: `lessons.${index}.duration`,
                            type: "text",
                            label: "Duration",
                          })}

                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() =>
                          push({ name: "", video: "", duration: "" })
                        }
                      >
                        + Add Lesson
                      </button>
                    </>
                  )}
                </FieldArray>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>FAQs</CardHeader>
              <CardBody>
                <FieldArray name="faqs">
                  {({ push, remove }) => (
                    <>
                      {values.faqs.map((_, index) => (
                        <div key={index} className="border p-3 mb-3 rounded">
                          {renderFormField({
                            id: `faqs.${index}.question`,
                            name: `faqs.${index}.question`,
                            type: "text",
                            label: "Question",
                          })}
                          {renderFormField({
                            id: `faqs.${index}.answer`,
                            name: `faqs.${index}.answer`,
                            type: "textarea",
                            label: "Answer",
                          })}
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => remove(index)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => push({ question: "", answer: "" })}
                      >
                        + Add FAQ
                      </button>
                    </>
                  )}
                </FieldArray>
              </CardBody>
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CourseForm;
