import React from 'react'
import { Link } from "react-router-dom"
import { AppBar, Avatar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../../../../providers/Auth';


const LandingNavbar = () => {
    const auth = useAuth();
    return (
        <AppBar position='static' color='secondary' sx={{ background: "#fff", color: "#fff" }} >
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant='h6' color="primary" >LOGO</Typography>
                    <Stack sx={{ flexGrow: 1, justifyContent: "end", gap: 1 }} direction="horizontal">
                        {!auth?.user && <>
                            <Link to="/login">
                                <Button variant='outlined'>login</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant='contained'>register</Button>
                            </Link>
                        </>}
                        {auth?.user && <> <Avatar src={auth.user?.photoURL} />
                            <Button variant='contained' color='error' onClick={auth.signOutHandler}>sign out</Button>
                        </>}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default LandingNavbar;