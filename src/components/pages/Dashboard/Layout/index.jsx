import React from 'react'
import { Outlet } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import DashboardNavbar from '../../../sections/general/Navbar/Dashboard';
import { grey } from "@mui/material/colors"

const DashboardLayout = (props) => {
    return (
        <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
            <DashboardNavbar />
            <Grid container sx={{ flexGrow: 1, height: "100vh",width:"100%" }}>
                <Grid item xs={2} sx={{ display: { xs: "none", md: "inline-grid" }, background: "#fff", borderRight: `1px solid ${grey[300]}` }}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashboardLayout;