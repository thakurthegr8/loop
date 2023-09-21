import { Button, Card, CardContent, Divider, Fab, IconButton, Stack, TextField, Typography } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from 'react'
import { Add } from '@mui/icons-material';
import { useNote } from '../../../../providers/Notes';
import { Link, NavLink } from 'react-router-dom';
import moment from "moment";
import lodash from "lodash";
import { BRAND_NAME } from '../../../../constants';
import MetaDataProvider from '../../../../providers/Meta';

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
    useEffect(() => {
        setCurrentNotes(notesCtx.notes);
    }, [notesCtx.notes])
    return (
        <Stack spacing={1} pb={10} position="relative">
            <MetaDataProvider title={`${BRAND_NAME} | Notes`} />
            <Grid container spacing={2} flexGrow={1}>
                <Grid item xs={12}>
                    <TextField fullWidth sx={{ flexGrow: 1 }} variant='standard' label="Search" onChange={onSearchQueryChange} onSubmit={onSearch} />
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