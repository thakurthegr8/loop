import React from 'react'
import { Outlet } from "react-router-dom";
import { Box, Grid, Paper, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import DashboardNavbar from '../../../sections/general/Navbar/Dashboard';
import { grey } from "@mui/material/colors"



const DashboardLayout = (props) => {
    return (
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
            <DashboardNavbar />
            <Grid container sx={{ flexGrow: 1, height: "100vh", width: "100%" }}>
                <Grid item xs={3} sx={{ display: { xs: "none", md: "inline-grid" }, borderRight: `1px solid ${grey[900]}` }}>
                    <Sidebar />
                </Grid>
                <Grid component={Paper} item xs={12} sm={12} md={9} sx={{ overflowY: "scroll" }} height="90vh" paddingBottom={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashboardLayout;