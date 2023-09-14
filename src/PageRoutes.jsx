import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './components/pages/Home/Layout'
import HomePage from './components/pages/Home'
import LoginPage from './components/pages/Home/Login'
import RegisterPage from './components/pages/Home/Register'
import DashboardPage from './components/pages/Dashboard'
import { useAuth } from './providers/Auth'
import DashboardLayout from './components/pages/Dashboard/Layout'

const PageRoutes = () => {
    const auth = useAuth();
    return (
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
                    <Route index element={<DashboardPage/>} />
                </Route>
            )}
            <Route path="*" element={<>404</>} />
        </Routes>
    )
}

export default PageRoutes