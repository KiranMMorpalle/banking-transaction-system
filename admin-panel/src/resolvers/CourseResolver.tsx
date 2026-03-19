import { useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  SpinnerContext,
  type ICourse,
  type ICoursePayload,
} from "@kiranmmorpalle/common-types";
import { useApiMutation, useApiQuery } from "../services/queryService";
import { coursesService } from "../services/courseService";
import { setCourses } from "../store/courseSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Props = {
  courseId?: string;
};
const useCourseResolver = ({ courseId }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setIsLoading } = useContext(SpinnerContext);
  const { courses } = useAppSelector((state) => state.course);

  //  Fetch all
  const {
    data,
    isSuccess,
    isLoading: isCourseLoading,
  } = useApiQuery<ICourse[]>(["courses"], coursesService.getAll);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCourses(data));
    }
  }, [isSuccess, data, dispatch]);

  //  Fetch by ID
  const { data: courseById } = useApiQuery<ICourse | undefined>(
    ["course", courseId],
    () => coursesService.getById(courseId!),
    {
      enabled: !!courseId,
    }
  );

  // Mutation: create new
  const createCourseMutation = useApiMutation(
    (data: ICoursePayload) => coursesService.create(data),
    {
      onSuccess: (data: ICourse) => {
        toast.success("Course added successfully");
        navigate(`/courses/edit/${data._id}`);
      },
      onError: () => {
        toast.error("Failed to add Course.");
      },
      invalidateKeys: [["courses"]],
    }
  );

  //  Mutation: update values
  const updateCourseMutation = useApiMutation(
    ({ id, data }: { id: string; data: ICoursePayload }) =>
      coursesService.update(id, data),
    {
      onSuccess: () => {
        toast.success("Course updated successfully");
      },
      onError: () => {
        toast.error("Failed to update course");
      },
      invalidateKeys: [["courses"]],
    }
  );

  //  Mutation: delete values
  const deleteCourseMutation = useApiMutation(
    (id: string) => coursesService.delete(id),
    {
      onSuccess: () => {
        toast.success("Course deleted successfully");
      },
      onError: () => {
        toast.error("Failed to delete course");
      },
      invalidateKeys: [["courses"]],
    }
  );

  //  Set loading spinner based on mutation state
  useEffect(() => {
    setIsLoading(
      isCourseLoading ||
        createCourseMutation.isPending ||
        updateCourseMutation.isPending ||
        deleteCourseMutation.isPending
    );
  }, [
    isCourseLoading,
    createCourseMutation.isPending,
    updateCourseMutation.isPending,
    deleteCourseMutation.isPending,
    setIsLoading,
  ]);

  return {
    courses,
    courseById,
    createCourseMutation,
    updateCourseMutation,
    deleteCourseMutation,
  };
};

export default useCourseResolver;
