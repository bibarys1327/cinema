import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id?: string;
  // Add other user properties as needed
  name?: string;
}

interface AuthState {
  user: User;
  isAuthenticated: boolean;
  sessionId: string;
}

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id") || "";

      localStorage.setItem("accountId", action.payload.id || "");
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state: { user: AuthState }) => state.user;
