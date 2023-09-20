import { Alert, Box, Button, Divider, IconButton, Modal, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useNote } from '../../../../../providers/Notes';
import moment from 'moment';
import { Delete, Edit } from '@mui/icons-material';
import AppModal from '../../../../ui/Modal';

const ViewNotePage = () => {
    const currentParams = useParams();
    const navigate = useNavigate();
    const notesCtx = useNote();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [currentNote, setNote] = useState(notesCtx.notes?.[currentParams.note_id])
    const toggleModalVisibility = () => {
        setModalVisibility(prev => !prev);
    }
    const deleteNote = () => {
        notesCtx.deleteNote([+currentParams.note_id]);
        navigate("/notes");
    }
    if (!currentNote) return <>no such note found</>
    return (
        <>
            <Stack spacing={2}>
                <Stack spacing={0.5}>
                    <Typography variant='h6'>{currentNote.title}</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2">Created at {moment(currentNote.createdAt).format("DD/MM/YYYY, hh:mm a")}</Typography>
                        <Box>
                            <IconButton LinkComponent={Link} to={`/notes/update/${currentNote.id}`}><Edit /></IconButton>
                            <IconButton onClick={toggleModalVisibility}><Delete /></IconButton>
                            <AppModal
                                open={modalVisibility}
                                onClose={toggleModalVisibility}
                                header={{ title: <Typography variant='body1' fontWeight={600}>Confirmation to delete note</Typography> }}
                                Content={<Alert severity='error'>Are you sure to delete this note</Alert>}
                                Actions={<Stack direction="row" alignItems="center" justifyContent="end" spacing={1} width="100%">
                                    <Button color='primary' size='small' onClick={deleteNote}>Confirm</Button>
                                    <Button color='error' size='small' onClick={toggleModalVisibility}>Cancel</Button>
                                </Stack>}
                            />
                        </Box>
                    </Stack>
                    <Divider />
                </Stack>
                <Typography sx={{wordBreak:"break-word"}}>{currentNote.description}</Typography>
            </Stack>
        </>
    )
}

export default ViewNotePage