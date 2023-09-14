import React from "react";
import LoginFormBlock from "./components/blocks/Login/LoginForm";
import RegisterFormBlock from "./components/blocks/Register/RegisterForm";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import LoginPage from "./components/pages/Home/Login";
import RegisterPage from "./components/pages/Home/Register";
import DashboardPage from "./components/pages/Dashboard";
import HomeLayout from "./components/pages/Home/Layout";
import { useAuth } from "./providers/Auth";
import DashboardLayout from "./components/pages/Dashboard/Layout";

const App = () => {
  const auth = useAuth();
  return (
    <Router>
      <Routes>
        {!auth.user && (
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        )}
        {auth.user && (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<>dashboard home</>} />
          </Route>
        )}
        <Route path="*" element={<>404</>} />
      </Routes>
    </Router>
  );
};
export default App;
