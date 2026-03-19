import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import courseReducer from "./courseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
  },
});

// 🔧 Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
