import React, { createContext, useContext, useEffect, useReducer } from 'react';
import db from '../../services/firebase/db';
import { useAuth } from '../Auth';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';

const notesCollection = collection(db, "notes");

const NoteContext = createContext();

const noteReducer =  (state, action) => {
    switch (action.type) {
        case 'INIT':
            return action.payload
        case 'ADD_NOTE':
             addDoc(notesCollection, action.payload);
            return state;
        case 'DELETE_NOTE':
             deleteDoc(doc(db, "notes", action.payload.id))
            return state
        case 'UPDATE_NOTE':
            const noteDoc = doc(db, "notes", action.payload.id);
             updateDoc(noteDoc, action.payload.note)
            return state;
        default:
            return state;
    }
};

// Step 3: Create a custom provider component
export function NoteProvider({ children }) {
    // Step 4: Use useReducer to manage the notes state
    const [notes, dispatch] = useReducer(noteReducer, []);
    const auth = useAuth();

    // Step 5: Create functions for adding, deleting, and updating notes using dispatch
    const addNote = (newNote) => {
        dispatch({ type: 'ADD_NOTE', payload: newNote });
    };

    const deleteNote = (noteId) => {
        dispatch({ type: 'DELETE_NOTE', payload: { id: noteId } });
    };

    const updateNote = (noteId, newNote) => {
        dispatch({ type: 'UPDATE_NOTE', payload: { id: noteId, note: newNote } });
    };

    const contextValue = {
        notes,
        addNote,
        deleteNote,
        updateNote,
    };

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const queryCurrentUserCollection = query(notesCollection, where("uid", "==", auth.user.uid))
                onSnapshot(queryCurrentUserCollection, (snapshot) => {
                    const { docs } = snapshot;
                    const notesData = docs.map(item => ({
                        ...item.data(), id: item.id
                    }))
                    dispatch({ type: "INIT", payload: notesData })
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchCollections();
    }, []);
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
