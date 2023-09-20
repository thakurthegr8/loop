import { AccountBox, DashboardCustomize } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Grid, Paper, Typography, listItemClasses } from '@mui/material'
import { blue, grey, orange } from '@mui/material/colors'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const settingsTiles = [{
    title: "Account",
    description: "Manage your account, change password, name and profile picture.",
    Icon: () => <AccountBox fontSize='large' />,
    color: orange[500],
    link: "/settings/account"
}, {
    title: "Preferences",
    description: "Change your theme, colors and customize app.",
    Icon: () => <DashboardCustomize fontSize='large' />,
    color: blue[500],
    link: "/settings/preferences"
}]

const SettingsPage = () => {
    return (
        <Grid container spacing={2} flexGrow={1}>
            {settingsTiles.map(item => <Grid item xs={12} sm={6}  key={item.title}>
                <NavLink to={item.link} component={Link} style={{ textDecoration: "none" }}>
                    <Card variant="outlined">
                        <CardMedia >
                            <Box sx={{ padding: 8, color: "#fff", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: item.color }}>
                                <item.Icon />
                            </Box>
                        </CardMedia>
                        <CardContent sx={{ textDecoration: "none" }}>
                            <Typography fontWeight={600} variant='h6'>{item.title}</Typography>
                            <Typography sx={{ color: grey[500] }}>{item.description}</Typography>
                        </CardContent>
                    </Card>
                </NavLink>
            </Grid>)}
        </Grid>
    )
}

export default SettingsPage