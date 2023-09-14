import React from 'react'
import LandingNavbar from '../../sections/general/Navbar/Landing';
import { Outlet } from "react-router-dom";
import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const DashboardLayout = (props) => {
    return (
        <>
            <LandingNavbar />
            <Grid container sx={{ flexGrow: 1, height: "100vh" }}>
                <Grid item xs={2} sx={{ borderRight: "1px solid gray" }}>
                    <List>
                        <ListItem>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}

export default DashboardLayout;