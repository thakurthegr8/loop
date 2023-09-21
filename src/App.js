import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./providers/Auth";
import PageRoutes from "./PageRoutes";
import { NoteProvider } from "./providers/Notes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import AppThemeProvider from "./providers/Theme";

const App = () => {
  return (
      <Router>
        <AuthProvider>
          <NoteProvider>
            <PageRoutes />
          </NoteProvider>
        </AuthProvider>
      </Router>
  );
};
export default App;
