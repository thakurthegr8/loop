import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAuth } from '../../../../../providers/Auth'
import { updatePassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../../../services/firebase/auth';

const ChangeAuthInfo = () => {
    const authCtx = useAuth();
    const [formData, setFormData] = useState({
        password: ""
    })

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await updatePassword(auth.currentUser, formData.password)
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
                <TextField type="password" name="password" onChange={handleChange} variant='standard' label="Password" value={formData.password} fullWidth required />
                <Button type="submit" variant='contained' disableElevation>update</Button>
            </Stack>
        </form>
    )
}

export default ChangeAuthInfo