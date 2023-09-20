import React, { createContext, useContext, useReducer } from 'react';
import { tempData } from './tempData';

// Step 1: Create a new context
const NoteContext = createContext();

// Step 2: Define the reducer function
const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload];
        case 'DELETE_NOTE':
            return state.filter((note,index) => !Array.from(action.payload).includes(index));
        case 'UPDATE_NOTE':
            return state.map((note) =>
                note.id === action.payload.id ? action.payload.note : note
            );
        default:
            return state;
    }
};

// Step 3: Create a custom provider component
export function NoteProvider({ children }) {
    // Step 4: Use useReducer to manage the notes state
    const [notes, dispatch] = useReducer(noteReducer, tempData);

    // Step 5: Create functions for adding, deleting, and updating notes using dispatch
    const addNote = (newNote) => {
        dispatch({ type: 'ADD_NOTE', payload: newNote });
    };

    const deleteNote = (noteIds) => {
        dispatch({ type: 'DELETE_NOTE', payload: noteIds });
    };

    const updateNote = (noteId, newNote) => {
        dispatch({ type: 'UPDATE_NOTE', payload: { id: noteId, note: newNote } });
    };

    // Step 6: Define the context value with state and functions
    const contextValue = {
        notes,
        addNote,
        deleteNote,
        updateNote,
    };

    // Step 7: Provide the context value to the components
    return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>;
}

// Step 8: Create a custom hook for accessing the context
export function useNote() {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNote must be used within a NoteProvider');
    }
    return context;
}
