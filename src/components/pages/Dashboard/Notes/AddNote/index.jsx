import { Button, Stack, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNote } from '../../../../../providers/Notes';

const AddNotePage = () => {
    const navigate = useNavigate();
    const notesCtx = useNote();
    const [currentNote, setNote] = useState({ id: notesCtx.notes.length, title: "", description: "" })
    const handleChangeNote = (e) => {
        setNote(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const onNoteSubmit = (e) => {
        e.preventDefault();
        notesCtx.addNote(currentNote);
        navigate("/notes")
    }
    return (
        <form onSubmit={onNoteSubmit}>
            <Stack spacing={4}>
                <Stack direction="row" justifyContent="end">
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
    )
}

export default AddNotePage;