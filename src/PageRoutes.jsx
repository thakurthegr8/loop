import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './components/pages/Home/Layout'
import HomePage from './components/pages/Home'
import LoginPage from './components/pages/Home/Login'
import RegisterPage from './components/pages/Home/Register'
import DashboardPage from './components/pages/Dashboard'
import { useAuth } from './providers/Auth'
import DashboardLayout from './components/pages/Dashboard/Layout'
import SettingsPage from './components/pages/Dashboard/Settings'
import SettingsLayout from './components/pages/Dashboard/Settings/Layout'
import SettingsAccountPage from './components/pages/Dashboard/Settings/Account'
import SettingsPreferencesPage from './components/pages/Dashboard/Settings/Preferences'

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
                    <Route index element={<DashboardPage />} />
                    <Route path="settings" element={<SettingsLayout />}>
                        <Route index element={<SettingsPage />} />
                        <Route path="account" element={<SettingsAccountPage />} />
                        <Route path="preferences" element={<SettingsPreferencesPage />} />
                    </Route>
                </Route>
            )}
            <Route path="*" element={<>404</>} />
        </Routes>
    )
}

export default PageRoutes