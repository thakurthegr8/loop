import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../../../../../providers/Auth'
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../../../services/firebase/auth';

const ChangeAccountInfo = () => {
    const authCtx = useAuth();
    const [formData, setFormData] = useState({
        name: authCtx.user.displayName
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await updateProfile(auth.currentUser, {
            displayName: formData.name
        })
        console.log(response)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (

        <form onSubmit={onSubmit}>
            <Stack spacing={1} justifyContent="left" alignItems="start">
                <TextField name="name" onChange={handleChange} variant='standard' label="Name" value={formData.name} fullWidth required />
                <Button type="submit" variant='contained' disableElevation disabled={formData.name === authCtx.user.displayName}>Submit</Button>
            </Stack>
        </form>
    )
}

export default ChangeAccountInfo