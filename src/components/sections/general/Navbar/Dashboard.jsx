import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AppBar, Button, Divider, Drawer, IconButton, Stack, Toolbar } from '@mui/material';
import Menu from "@mui/icons-material/Menu"
import { useAuth } from '../../../../providers/Auth';
import ItemsList from '../../../pages/Dashboard/Layout/ItemsList';
import Logo from '../../../elements/general/Logo';
import AccountAvatar from '../../../elements/auth/AccountAvatar';
import { grey } from '@mui/material/colors';
import { sidebarLinksList } from '../../../pages/Dashboard/Layout/Sidebar';
import { Close } from '@mui/icons-material';


const DashboardNavbar = () => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    const auth = useAuth();
    const toggleDrawerVisibility = () => {
        setDrawerVisibility(prev => !prev);
    }
    return (
        <AppBar position='static' color='' variant='outlined'>
            <Toolbar>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={toggleDrawerVisibility} sx={{ display: { md: "none" } }}><Menu /></IconButton>
                    <Logo />
                </Stack>
                <Drawer style={{ width: "100%" }} open={drawerVisibility} onClose={toggleDrawerVisibility} variant="temporary">
                    <Stack width="100vw" spacing={1}>
                        <Stack direction="row" px={2} pt={1} alignItems="center" justifyContent="space-between">
                            <Logo />
                            <IconButton onClick={toggleDrawerVisibility}><Close/></IconButton>
                        </Stack>
                        <Divider/>
                        <ItemsList itemsList={sidebarLinksList} />
                    </Stack>
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
        </AppBar >
    )
}

export default DashboardNavbar;