import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNote } from '../../../providers/Notes';
import { Add } from '@mui/icons-material';

const DashboardPage = () => {
    const notesCtx = useNote();
    return (
        <Box height="100%" padding={4}>
           <Card>
            <CardContent>
                Notes here
            </CardContent>
           </Card>
        </Box>
    )
}

export default DashboardPage;