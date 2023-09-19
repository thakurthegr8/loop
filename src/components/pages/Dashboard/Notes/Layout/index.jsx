import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';

const NotesLayout = () => {
    return (
        <Container sx={{ py: 2 }}>
            <Stack>
                <Typography variant='h5' fontWeight={600} py={1}>Notes</Typography>
                <Outlet />
            </Stack>
        </Container>
    )
}

export default NotesLayout;