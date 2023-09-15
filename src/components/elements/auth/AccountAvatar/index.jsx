import React from 'react'
import { useAuth } from '../../../../providers/Auth'
import { Avatar, Button, Card, CardActions, CardHeader, Divider, IconButton, Popover, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AccountAvatar = () => {
    const auth = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    if (auth.user == null) return null;
    console.log(auth.user)
    return (
        <>
            <IconButton aria-describedby={id} variant="contained" onClick={handleClick}><Avatar src={auth.user?.photoURL} /></IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <Card sx={{ maxWidth: 600, width: 300 }}>
                    <CardHeader
                        avatar={<Avatar src={auth.user?.photoURL} />}
                        title={<Typography variant='h6' fontWeight={600} sx={{ textTransform: "capitalize" }}>{auth.user?.displayName}</Typography>}
                        subheader={<Typography variant='body1'>{auth.user.email}</Typography>}
                    >
                    </CardHeader>
                    <Divider />
                    <CardActions>
                        <Link to="/settings">
                            <IconButton><Settings /></IconButton>
                        </Link>
                        <Button sx={{ flexGrow: 1 }} variant='outlined' color='error' onClick={auth.signOutHandler}>sign out</Button>
                    </CardActions>
                </Card>
            </Popover>
        </>
    )
}

export default AccountAvatar