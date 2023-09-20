import { Container, Stack, Typography } from '@mui/material';
import React from 'react'

const HomePage = () => {
    return (
        <Container maxWidth="md">
            <Stack mt={8} justifyContent="center" alignItems="center">
                <Typography variant='h3' align='center' sx={{ fontWeight: "bold" }}>Your all in one note taking app</Typography>
                <Typography variant='h6' align='center'>Get all your notes at one place</Typography>
                <img src="/assets/landing_hero.png" style={{ maxWidth: 320 }} />
            </Stack>
        </Container>
    )
}

export default HomePage;