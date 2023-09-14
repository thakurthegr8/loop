import React, { createContext, useContext, useState } from 'react'
import { auth, mapErrorMessage, signInWithCredentials, signInWithGoogle, signOutLocal } from '../../services/firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import VerifyEmailBlock from '../../components/blocks/General/VerifyEmailBlock';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(
    {
        user: null,
        signInWithGoogleHandler: () => null,
        signInWithCredentialsHandler: (email, password) => null,
        signOutHandler: () => null,
        loading: false,
        error: null,
        customError: { message: "" }
    });

export const useAuth = () => useContext(AuthContext)

const AuthProvider = (props) => {
    const [user, loading, error] = useAuthState(auth);
    const router = useNavigate();
    const [customError, setCustomError] = useState({ message: "" })

    const signInWithGoogleHandler = async () => {
        try {
            await signInWithGoogle();
            router("/");
        } catch (error) {
            console.log(error);
        }
    }

    const signInWithCredentialsHandler = async (email, password) => {
        try {
            const response = await signInWithCredentials(email, password);
            if (response.error) {
                throw response.error;
            }
            router("/");

        } catch (error) {
            if (error instanceof Error)
                setCustomError({ message: mapErrorMessage(error.message) })
        }
    }
    const signOutHandler = async () => {
        await signOutLocal();
    }
    if (loading) {
        return <CircularProgress />
    }
    if (user && !user.emailVerified) return <VerifyEmailBlock />
    return (
        <AuthContext.Provider value={{ user, signInWithGoogleHandler, signInWithCredentialsHandler, signOutHandler, loading, error, customError }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;