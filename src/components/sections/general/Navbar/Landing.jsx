import React from 'react'
import { Link } from "react-router-dom"
import { AppBar, Avatar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../../../../providers/Auth';
import Logo from '../../../elements/general/Logo';


const LandingNavbar = () => {
    const auth = useAuth();
    return (
        <AppBar position='static' color='default'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Logo/>
                    <Stack sx={{ flexGrow: 1, justifyContent: "end", gap: 1 }} direction="horizontal">
                        {!auth?.user && <>
                                <Button variant='link' LinkComponent={Link} to="/login">login</Button>
                                <Button variant='contained' LinkComponent={Link} to="/register">register</Button>
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