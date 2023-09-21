import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useAppTheme } from '../../../providers/Theme';
import { APP_FEATURES } from '../../../constants/home';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const currentThemeCtx = useAppTheme();
    // useEffect(() => {
    //     if (currentThemeCtx?.theme === "dark") currentThemeCtx?.toggleTheme()
    // }, [])
    return (
        <Container maxWidth="md">
            <Stack mt={8} justifyContent="center" alignItems="center">
                <Typography variant='h3' align='center' sx={{ fontWeight: "bold" }}>Your all in one note taking app</Typography>
                <Typography variant='h6' align='center'>Get all your notes at one place</Typography>
                <img src="https://illustrations.popsy.co/violet/engineer.svg" style={{ maxWidth: 320, mixBlendMode: "darken" }} />
                {APP_FEATURES.map((item, index) => <Grid container key={`app_feature_${index}`}>
                    <Grid item xs={12} sm={8}>
                        <Stack justifyContent="center" alignItems="start" height="100%">
                            <Typography variant="h4" fontWeight={900}>{item.feature}</Typography>
                            <Typography>{item.description}</Typography>
                            <Button LinkComponent={Link} to="/register" size='large' sx={{ textTransform: "capitalize" }}>{item.tagLine}</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src={item.image} width="100%" />
                    </Grid>
                </Grid>)
                }
            </Stack >
        </Container >
    )
}

export default HomePage;