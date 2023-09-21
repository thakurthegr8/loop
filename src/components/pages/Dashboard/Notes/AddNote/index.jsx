import { Button, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNote } from '../../../../../providers/Notes';
import { useAuth } from '../../../../../providers/Auth';
import MetaDataProvider from '../../../../../providers/Meta';
import { BRAND_NAME } from '../../../../../constants';
const initialState = { title: "", description: "" }

const AddNotePage = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const notesCtx = useNote();
    const [currentNote, setNote] = useState(initialState);
    const handleChangeNote = (e) => {
        setNote(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onNoteSubmit = useCallback((e) => {
        e.preventDefault();
        notesCtx.addNote({ createdAt: Date.now(), uid: auth.user.uid, ...currentNote });
        navigate("/notes");
    }, [currentNote])
    return (
        <>
        <MetaDataProvider title={`${BRAND_NAME} | Add Note`}/>
        <form onSubmit={onNoteSubmit}>
            <Stack spacing={4}>
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }}>
                    <Typography variant='h6'>Add Note</Typography>
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

export default AddNotePage;