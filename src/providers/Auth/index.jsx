import React, { createContext, useContext, useState } from 'react'
import { auth, mapErrorMessage, signInWithCredentials, signInWithGoogle, signOutLocal } from '../../services/firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import VerifyEmailBlock from '../../components/blocks/General/VerifyEmailBlock';
import { CircularProgress, Container, Stack } from '@mui/material';

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
    const [customError, setCustomError] = useState({ message: "" })

    const signInWithGoogleHandler = async () => {
        await signInWithGoogle();
    }

    const signInWithCredentialsHandler = async (email, password) => {
        try {
            const response = await signInWithCredentials(email, password);
            if (response.error) {
                throw response.error;
            }
            console.log(response.data);
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