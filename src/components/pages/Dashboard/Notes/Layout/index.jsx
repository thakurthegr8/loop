import { ChevronLeft } from '@mui/icons-material';
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const NotesLayout = () => {
    const navigate = useNavigate();
    const backToPreviousPageHandler = () => {
        navigate(-1);
    }
    return (
        <Container sx={{ py: 2 }}>
            <Stack>
                <Stack direction="row" alignItems="center">
                    <IconButton onClick={backToPreviousPageHandler} color='default'><ChevronLeft /></IconButton>
                    <Typography variant='h5' fontWeight={600} py={1}>Notes</Typography>
                </Stack>
                <Outlet />
            </Stack>
        </Container>
    )
}

export default NotesLayout;