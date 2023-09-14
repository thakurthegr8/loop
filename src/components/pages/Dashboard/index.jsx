import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'

const DashboardPage = () => {
    return (
        <Box height="100%">
            <Stack alignItems="center" justifyContent="center" height="100%">
                <Card>
                    <CardContent>
                        <Typography variant='h4' fontWeight={600} textAlign="center"> Place your content here</Typography>
                        <Typography variant='body1' textAlign="center">All items will be shown here</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}

export default DashboardPage;