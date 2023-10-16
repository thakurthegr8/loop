import React, { useState } from 'react'
import Joi from "joi";
import { Alert, Button, Container, Divider, FormGroup, Stack, TextField, Typography } from '@mui/material'
import { useAuth } from '../../../../providers/Auth';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../../../elements/auth/GoogleLoginBtn';

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
    return (
        <Container maxWidth="xs" sx={{ pt: 8 }}>
            <Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant='h5' sx={{ textAlign: "center", fontWeight: "semibold" }}>Login to continue</Typography>
                        <FormGroup>
                            <Stack spacing={2}>
                                <TextField onChange={handleChange} type="email" name="email" label="Email" value={formData.email} error={errorState.email.error} helperText={errorState.email.message} variant="filled" size='small'/>
                                <TextField onChange={handleChange} type="password" name="password" label="Password" value={formData.password} error={errorState.password.error} helperText={errorState.password.message} variant="filled" size='small'/>
                                <Typography variant="body2" sx={{'& a': { '&:hover': { textDecoration: 'underline',},}, }}>
                                    <Link to="/ForgotPassword">Forgot Password?</Link>
                                </Typography>
                                <Button type='submit' variant='contained'>login</Button>
                                <Link to="/register">
                                    <Button type='button' variant='outlined' fullWidth>register</Button>
                                </Link>
                            </Stack>
                        </FormGroup>
                        <Divider />
                        <GoogleLoginButton/>
                    </Stack>
                </form>
                {auth.customError.message && <Alert severity='error'>{auth.customError.message}</Alert>}
            </Stack>
        </Container>
    )
}

export default LoginFormBlock