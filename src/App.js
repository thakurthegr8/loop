import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./providers/Auth";
import PageRoutes from "./PageRoutes";
import { NoteProvider } from "./providers/Notes";

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
