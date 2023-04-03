import React from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};