import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./providers/Auth";
import PageRoutes from "./PageRoutes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <PageRoutes />
      </AuthProvider>
    </Router>
  );
};
export default App;
