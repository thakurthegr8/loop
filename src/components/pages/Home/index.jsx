import { Container, Stack, Typography } from '@mui/material';
import React from 'react'

const HomePage = () => {
    return (
        <Container>
            <Stack mt={8}>
                <Typography variant='h3' align='center' sx={{fontWeight:"bold"}}>The React firebase app</Typography>
                <Typography variant='h6' align='center'>The next auth solution for react firebase</Typography>
            </Stack>
        </Container>
    )
}

export default HomePage;