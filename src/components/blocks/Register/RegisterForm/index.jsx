import React, { useState } from 'react'
import Joi from "joi";
import { Alert, Button, Container, Divider, FormGroup, Stack, TextField, Typography } from '@mui/material'
import { useAuth } from '../../../../providers/Auth';
import useRegister from '../../../../hooks/auth/useRegister';

const errorInitialState = {
    email: {
        error: false,
        message: "",
    },
    password: {
        error: false,
        message: "",
    },
    conf_password: {
        error: false,
        message: "",
    },
}

const RegisterFormBlock = () => {
    const auth = useAuth();
    const register = useRegister();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        conf_password: ""
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
            conf_password: Joi.string().valid(Joi.ref("password")).required()
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
        await register.registerHandler(formData.email, formData.password);
    }

    return (
        <Container maxWidth="xs" sx={{ pt: 8}}>
            <Stack>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                        <Typography variant='h6' sx={{ textAlign: "center", fontWeight: "bold" }}>Create an account</Typography>
                        <FormGroup>
                            <Stack spacing={2}>
                                <TextField onChange={handleChange} type="email" name="email" label="Email" value={formData.email} error={errorState.email.error} helperText={errorState.email.message} />
                                <TextField onChange={handleChange} type="password" name="password" label="Password" value={formData.password} error={errorState.password.error} helperText={errorState.password.message} />
                                <TextField onChange={handleChange} type="password" name="conf_password" label="Confirm Password" value={formData.conf_password} error={errorState.conf_password.error} helperText={errorState.conf_password.message} />
                                <Button type='submit' variant='contained'>register</Button>
                            </Stack>
                        </FormGroup>
                        <Divider />
                        <Button type="button" variant="outlined" onClick={auth.signInWithGoogleHandler}>register with google</Button>
                    </Stack>
                </form>

            </Stack>
        </Container>
    )
}

export default RegisterFormBlock;