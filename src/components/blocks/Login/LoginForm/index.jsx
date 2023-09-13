import React, { useState } from 'react'
import Joi from "joi";
import { Alert, Button, Container, Divider, FormGroup, Stack, TextField, Typography } from '@mui/material'
import { useAuth } from '../../../../providers/Auth';

const errorInitialState = {
    email: {
        error: false,
        message: "",
    },
    password: {
        error: false,
        message: "",
    },
}

const LoginFormBlock = () => {
    const auth = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errorState, setErrorState] = useState(errorInitialState)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required(),
            password: Joi.string().required(),
        })
        const validate = schema.validate(formData);
        if (validate?.error) {
            let currentErrorState = errorInitialState;
            validate.error.details.forEach((item) => {
                currentErrorState = {
                    ...currentErrorState, [item.context.label]: {
                        error: true,
                        message: item.message
                    }
                }
            })
            setErrorState(currentErrorState);
            return;
        }
        setErrorState(errorInitialState);
        await auth.signInWithCredentialsHandler(formData.email, formData.password);
    }
    if (auth.user) return (<Stack>
        <Typography variant='body2'>already logged in</Typography>
        <Button onClick={auth.signOutHandler} variant='contained' color='error'>sign out</Button>
    </Stack>)
    return (
        <Container maxWidth="xs">
            <Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant='h6' sx={{ textAlign: "center", fontWeight: "bold" }}>Sign in to continue</Typography>
                        <FormGroup>
                            <Stack spacing={2}>
                                <TextField onChange={handleChange} type="email" name="email" label="Email" value={formData.email} error={errorState.email.error} helperText={errorState.email.message} />
                                <TextField onChange={handleChange} type="password" name="password" label="Password" value={formData.password} error={errorState.password.error} helperText={errorState.password.message} />
                                <Button type='submit' variant='contained'>login</Button>
                            </Stack>
                        </FormGroup>
                        <Divider />
                        <Button type="button" variant="outlined" onClick={auth.signInWithGoogleHandler}>continue with google</Button>
                    </Stack>
                </form>
                {auth.customError.message && <Alert severity='error'>{auth.customError.message}</Alert>}
            </Stack>
        </Container>
    )
}

export default LoginFormBlock