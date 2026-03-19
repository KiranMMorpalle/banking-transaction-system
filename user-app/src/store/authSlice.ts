import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { storageService, type IUser } from "@kiranmmorpalle/common-types";

const localUser = storageService.getLocal<IUser>("userData");
const initialState = {
  user: localUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Partial<typeof initialState>>) => {
      return { ...state, ...action.payload };
    },

    resetAuth: () => {
      storageService.removeLocal("userData");
      storageService.removeLocal("accessToken");
      storageService.removeLocal("refreshToken");
      return { ...initialState, user: null };
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
