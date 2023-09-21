import { Box, Button, Card, CardContent, Divider, Stack, TextField, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from 'react'
import { Add } from '@mui/icons-material';
import { useNote } from '../../../../providers/Notes';
import { Link, NavLink } from 'react-router-dom';
import moment from "moment";
import lodash from "lodash";

const NotesPage = () => {
    const notesCtx = useNote();
    const [currentNotes, setCurrentNotes] = useState(notesCtx.notes)
    const onSearch = () => {
    }
    const onSearchQueryChange = (e) => {
        if (e.target.value === "") {
            setCurrentNotes(notesCtx.notes);
            return;
        }
        const data = lodash.filter(notesCtx.notes, (item) => {
            return item.title.includes(e.target.value) || item.description.includes(e.target.value)
        });
        setCurrentNotes(data);
    }
    return (
        <Stack spacing={1}>
            <Grid container spacing={2} flexGrow={1}>
                <Grid item xs={12}>
                    <Stack direction={{ sm: "row", xs: "column" }} justifyContent="end" spacing={2}>
                        <TextField sx={{ flexGrow: 1 }} variant='standard' label="Search" onChange={onSearchQueryChange} onSubmit={onSearch} />
                        <Button LinkComponent={Link} to="/notes/add" endIcon={<Add />} variant='contained'>Add New</Button>
                    </Stack>
                </Grid>
                {currentNotes.length === 0 && <Grid item xs={12}>
                    <Stack justifyContent="center" alignItems="center" py={10}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant='h5' fontWeight={800} textAlign="center">It's empty in here</Typography>
                                <Typography variant='body1' textAlign="center">Add some notes to get started</Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>}
                {currentNotes.map((item, index) => <Grid key={index} xs={12} sm={6}>
                    <NavLink to={`/notes/view/${item.id}`} component={Link} style={{ textDecoration: "none" }}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Stack spacing={1}>
                                    <Typography variant='h5' fontWeight={600} noWrap>{item.title}</Typography>
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