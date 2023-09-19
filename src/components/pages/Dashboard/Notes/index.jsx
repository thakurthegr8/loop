import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import React from 'react'
import { Add } from '@mui/icons-material';
import { useNote } from '../../../../providers/Notes';
import { Link, NavLink } from 'react-router-dom';

const NotesPage = () => {
    const notesCtx = useNote();
    return (
        <Stack spacing={1}>
            <Grid container spacing={4} flexGrow={1}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="end">
                        <Button LinkComponent={Link} to="/notes/add-note" endIcon={<Add />} variant='contained'>Add New</Button>
                    </Stack>
                </Grid>
                {notesCtx.notes.map((item, index) => <Grid  key={index} xs={12} sm={6}>
                    <NavLink to={`/notes/update-note/${item.id}`} component={Link} style={{ textDecoration: "none" }}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6' fontWeight={600}>{item.title}</Typography>
                                <Typography variant='body1' noWrap>{item.description}</Typography>
                            </CardContent>
                        </Card>
                    </NavLink>
                </Grid>)}
            </Grid>
        </Stack>
    )
}

export default NotesPage;