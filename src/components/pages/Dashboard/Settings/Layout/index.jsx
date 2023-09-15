import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';

const SettingsLayout = () => {
    return (
        <Container sx={{ py: 2 }}>
            <Box>
                <Typography variant='h5' fontWeight={600} py={1}>Settings</Typography>
                <Divider />
                <Outlet />
            </Box>
        </Container>
    )
}

export default SettingsLayout;