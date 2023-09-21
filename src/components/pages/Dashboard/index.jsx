import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNote } from "../../../providers/Notes"
import NotesPage from './Notes';


const DashboardPage = () => {
    const notesCtx = useNote();
    return (
        <Box height="100%" padding={2}>
            <Stack >
                <Typography variant='h5' fontWeight={600}>Welcome back</Typography>
                <NotesPage/>
            </Stack>
        </Box>
    )
}

export default DashboardPage;