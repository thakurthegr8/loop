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
import NotesLayout from './components/pages/Dashboard/Notes/Layout'
import NotesPage from './components/pages/Dashboard/Notes'
import AddNotePage from './components/pages/Dashboard/Notes/AddNote'
import UpdateNotePage from './components/pages/Dashboard/Notes/UpdateNote'
import ViewNotePage from './components/pages/Dashboard/Notes/ViewNote'

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
                    <Route path="notes" element={<NotesLayout />}>
                        <Route index element={<NotesPage />} />
                        <Route path="add" element={<AddNotePage />} />
                        <Route path="view/:note_id" element={<ViewNotePage />} />
                        <Route path="update/:note_id" element={<UpdateNotePage />} />
                    </Route>
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