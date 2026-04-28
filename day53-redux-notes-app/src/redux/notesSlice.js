import { createSlice } from "@reduxjs/toolkit";

// Global Data
const initialState = {
    notes: []
}

const notesSlice = createSlice({
    // 3 parameters
    name: "entrinotes",
    initialState,
    reducers: {
        // logic functionalities
        // CRUD - Create Note, Read Note, Update Note, Delete Note
        // Task: Update Note

        addNote: (state, action) => {
            state.notes.push(action.payload);
        },

        deleteNote: (state, action) => {
            state.notes = state.notes.filter(
                data => data.id !== action.payload
            );
        }
    }
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;