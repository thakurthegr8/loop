import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { Box, Card, Divider, Fab, Grid, Paper, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import DashboardNavbar from '../../../sections/general/Navbar/Dashboard';
import { grey } from "@mui/material/colors"
import { Add } from '@mui/icons-material';



const DashboardLayout = (props) => {
    return (
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
            <DashboardNavbar />
            <Grid container sx={{ flexGrow: 1, height: "100vh", width: "100%" }}>
                <Grid item xs sx={{ display: { xs: "none", md: "inline-grid" } }}>
                    <Sidebar />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={12} sm={12} md={9} sx={{ overflowY: "auto", position: "relative" }} height="100%" paddingBottom={20}>
                    <Outlet />
                </Grid>
            </Grid>
            <Fab LinkComponent={Link} to="/notes/add" color="primary" sx={{ position: "sticky", bottom: 24, right: 32, float: "right" }}><Add /></Fab>
        </Box>
    )
}

export default DashboardLayout;