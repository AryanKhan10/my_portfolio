import { createSlice } from "@reduxjs/toolkit";

// Detect system preference
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Get saved theme from localStorage or fallback to system preference
const initialTheme = localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light");

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: initialTheme },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Persist theme in localStorage
    },
    setTheme: (state, action) => {
      
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
