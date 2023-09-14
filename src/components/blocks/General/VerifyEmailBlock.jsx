import { Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import LandingNavbar from '../../sections/general/Navbar/Landing'
import useRegister from '../../../hooks/auth/useRegister'

const VerifyEmailBlock = () => {
    const register = useRegister();
    return (
        <><Container maxWidth="xs" sx={{ pt: 4 }}>
            <Card>
                <CardContent>
                    <Stack spacing={2}>
                        <Stack spacing={0.75}>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Please verify your email</Typography>
                            <Typography variant='body1'>A verification mail has been sent to your registered email id</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
        </>
    )
}

export default VerifyEmailBlock