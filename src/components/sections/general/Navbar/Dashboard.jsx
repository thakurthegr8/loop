import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar } from '@mui/material';
import Menu from "@mui/icons-material/Menu"
import { useAuth } from '../../../../providers/Auth';
import ItemsList from '../../../pages/Dashboard/Layout/ItemsList';
import Logo from '../../../elements/general/Logo';
import AccountAvatar from '../../../elements/auth/AccountAvatar';
import { grey } from '@mui/material/colors';
import { sidebarLinksList } from '../../../pages/Dashboard/Layout/Sidebar';


const DashboardNavbar = () => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    const auth = useAuth();
    const toggleDrawerVisibility = () => {
        setDrawerVisibility(prev => !prev);
    }
    return (
        <AppBar position='static' elevation={0} color='secondary' sx={{ borderBottom: `1px solid ${grey[300]}` }} >
            <Toolbar>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={toggleDrawerVisibility} sx={{ display: { md: "none" } }}><Menu /></IconButton>
                    <Logo />
                </Stack>
                <Drawer sx={{ width: "100vh",position:"relative" }} open={drawerVisibility} onClose={toggleDrawerVisibility} variant="temporary">
                    <ItemsList itemsList={sidebarLinksList}/>
                </Drawer>
                <Stack sx={{ flexGrow: 1, justifyContent: "end", gap: 1 }} direction="horizontal">
                    {!auth?.user && <>
                        <Link to="/login">
                            <Button variant='outlined'>login</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant='contained'>register</Button>
                        </Link>
                    </>}
                    <AccountAvatar />
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default DashboardNavbar;