import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar } from '@mui/material';
import Menu from "@mui/icons-material/Menu"
import { useAuth } from '../../../../providers/Auth';
import ItemsList from '../../../pages/Dashboard/Layout/ItemsList';
import Logo from '../../../elements/general/Logo';
import AccountAvatar from '../../../elements/auth/AccountAvatar';


const DashboardNavbar = () => {
    const [drawerVisibility, setDrawerVisibility] = useState(false);
    const auth = useAuth();
    const toggleDrawerVisibility = () => {
        setDrawerVisibility(prev => !prev);
    }
    return (
        <AppBar position='static' color='secondary' sx={{ background: "#fff", color: "#fff" }} >
            <Toolbar>
                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={toggleDrawerVisibility} sx={{ display: { sm: "none" } }}><Menu /></IconButton>
                    <Logo />
                </Stack>
                <Drawer open={drawerVisibility} onClose={toggleDrawerVisibility} variant="temporary">
                    <ItemsList />
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