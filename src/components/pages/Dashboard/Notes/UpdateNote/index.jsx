import { Button, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useNote } from '../../../../../providers/Notes';
import { BRAND_NAME } from '../../../../../constants';
import MetaDataProvider from '../../../../../providers/Meta';

const UpdateNotePage = () => {
    const currentParams = useParams();
    const notesCtx = useNote();
    const navigate = useNavigate();
    const [currentNote, setNote] = useState(notesCtx.notes.filter(item => item.id == currentParams.note_id)?.[0])
    if (!currentNote) return <>no such note found</>
    const handleChangeNote = (e) => {
        setNote(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onNoteSubmit = (e) => {
        e.preventDefault();
        notesCtx.updateNote(currentNote?.id, currentNote);
        navigate("/notes");
    }
    return (
        <><MetaDataProvider title={`${BRAND_NAME} | Update Note`} />
            <form onSubmit={onNoteSubmit}>
                <Stack spacing={4}>
                    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }}>
                        <Typography variant='h6'>Update note</Typography>
                        <Button variant='contained' type="submit">save</Button>
                    </Stack>
                    <TextField
                        name="title"
                        label="Title"
                        size='large'
                        type='text'
                        variant='standard'
                        fullWidth
                        required
                        defaultValue={currentNote.title}
                        value={currentNote.title}
                        onChange={handleChangeNote} />
                    <TextField
                        name="description"
                        label="Description"
                        type='text'
                        variant='filled'
                        fullWidth
                        required
                        multiline
                        defaultValue={currentNote.description}
                        value={currentNote.description}
                        onChange={handleChangeNote}
                        maxRows={20} minRows={16} />
                </Stack>
            </form>
        </>
    )
}

export default UpdateNotePage