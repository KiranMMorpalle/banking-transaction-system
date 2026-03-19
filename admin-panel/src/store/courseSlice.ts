import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICourse } from "@kiranmmorpalle/common-types";

type InitialState = {
  courses: ICourse[];
};
const initialState: InitialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<ICourse[]>) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = courseSlice.actions;
export default courseSlice.reducer;
