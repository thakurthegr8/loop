import { Button, Stack, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNote } from '../../../../../providers/Notes';

const UpdateNotePage = () => {
    const currentParams = useParams();
    const notesCtx = useNote();
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

export default UpdateNotePage