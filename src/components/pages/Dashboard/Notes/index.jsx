import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import React from 'react'
import { Add } from '@mui/icons-material';
import { useNote } from '../../../../providers/Notes';
import { Link, NavLink } from 'react-router-dom';
import moment from "moment";

const NotesPage = () => {
    const notesCtx = useNote();
    return (
        <Stack spacing={1}>
            <Grid container spacing={2} flexGrow={1}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="end">
                        <Button LinkComponent={Link} to="/notes/add" endIcon={<Add />} variant='contained'>Add New</Button>
                    </Stack>
                </Grid>
                {notesCtx.notes.length === 0 && <Grid item xs={12}>
                    <Stack justifyContent="center" alignItems="center" py={10}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant='h5' fontWeight={800} textAlign="center">It's empty in here</Typography>
                                <Typography variant='body1' textAlign="center">Add some notes to get started</Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>}
                {notesCtx.notes.map((item, index) => <Grid key={index} xs={12} sm={6}>
                    <NavLink to={`/notes/view/${index}`} component={Link} style={{ textDecoration: "none" }}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Stack spacing={1}>
                                    <Typography variant='h5' fontWeight={600}>{item.title}</Typography>
                                    <Typography variant='body1' noWrap>{item.description}</Typography>
                                    <Divider />
                                    <Typography variant="body2">Created at {moment(item.createdAt).format("DD/MM/YYYY, hh:mm a")}</Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </NavLink>
                </Grid>)}
            </Grid>
        </Stack>
    )
}

export default NotesPage;