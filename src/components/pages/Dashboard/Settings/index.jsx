import { AccountBox, DashboardCustomize } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Grid, Paper, Typography, listItemClasses } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const settingsTiles = [{
    title: "Account",
    description: "Manage your account, change password, name and profile picture.",
    Icon: () => <AccountBox fontSize='large' />,
    color: orange[500],
    link:"/settings/account"
}, {
    title: "Preferences",
    description: "Change your theme, colors and customize app.",
    Icon: () => <DashboardCustomize fontSize='large' />,
    color: blue[500],
    link:"/settings/preferences"
}]

const SettingsPage = () => {
    return (
        <Grid container spacing={4}>
            {settingsTiles.map(item => <Grid item xs={6} key={item.title} component={Link} to={item.link}>
                <Card elevation={2}>
                    <CardMedia>
                        <Box sx={{ padding: 8, color: "#fff", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: item.color }}>
                            <item.Icon />
                        </Box>
                    </CardMedia>
                    <CardContent sx={{textDecoration:"none"}}>
                        <Typography fontWeight={600} variant='h6'>{item.title}</Typography>
                        <Typography sx={{color:grey[700]}}>{item.description}</Typography>
                    </CardContent>
                </Card>
            </Grid>)}
        </Grid>
    )
}

export default SettingsPage