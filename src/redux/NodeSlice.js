// NodeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Notes: [],
  ActiveId: null,
  checked: false,
  color: "",
  count: 0,
  SearchTerm: "",
};

export const NodeSlice = createSlice({
  name: "AddNote",
  initialState,

  reducers: {
    NoteAdd: (state) => {
      if (state.checked) {
        const newNote = {
          id: state.Notes.length + 1,
          color: state.color,
          title: "",
          content: "",
          date: new Date().toLocaleDateString(),
          day: new Date().getDay(),
          count: state.count + 1,
        };

        state.Notes.push(newNote);
      } else {
        console.log("Select a color first");
      }
    },

    ActiveColor: (state, action) => {
      state.ActiveId = action.payload.id;
      state.color = action.payload.color;
      state.checked = true;
    },

    RemoveNote: (state, action) => {
      const itemId = action.payload;
      state.Notes = state.Notes.filter((i) => i.id !== itemId);
    },

    SearchNote: (state, action) => {
      state.SearchTerm = action.payload;
    },

    UpdateNoteTitle: (state, action) => {
      const { id, title } = action.payload;
      const note = state.Notes.find((note) => note.id === id);
      if (note) {
        note.title = title;
      }
    },

    UpdateNoteContent: (state, action) => {
      const { id, content } = action.payload;
      const note = state.Notes.find((note) => note.id === id);
      if (note) {
        note.content = content;
      }
    },
  },
});

export const {
  NoteAdd,
  ActiveColor,
  RemoveNote,
  SearchNote,
  UpdateNoteContent,
  UpdateNoteTitle,
} = NodeSlice.actions;
export default NodeSlice.reducer;
