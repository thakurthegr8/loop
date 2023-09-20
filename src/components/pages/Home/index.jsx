import { Container, Stack, Typography } from '@mui/material';
import React from 'react'

const HomePage = () => {
    return (
        <Container>
            <Stack mt={8}>
                <Typography variant='h3' align='center' sx={{ fontWeight: "bold" }}>Your all in one note taking app</Typography>
                <Typography variant='h6' align='center'>Get all your notes at one place</Typography>
            </Stack>
        </Container>
    )
}

export default HomePage;