import React from 'react'
import { useAuth } from '../../../../providers/Auth'
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';

const GoogleLoginButton = () => {
    const auth = useAuth();
    return (
        <Button type="button" variant="outlined" onClick={auth.signInWithGoogleHandler} startIcon={<Google />}>register with google</Button>
    )
}

export default GoogleLoginButton