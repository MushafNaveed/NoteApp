// Note.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveNote,
  UpdateNoteContent,
  UpdateNoteTitle,
} from "../../redux/NodeSlice";

export default function Note() {
  const Notes = useSelector((state) => state.AddNote.Notes);
  const dispatch = useDispatch();
  const SearchTerm = useSelector((state) => state.AddNote.SearchTerm);

  const FilterNote = Notes.filter((note) =>
    note.title.toLowerCase().includes(SearchTerm.toLowerCase())
  );

  const HandleTitleChange = (id, title) => {
    dispatch(UpdateNoteTitle({ id, title }));
  };

  const HandleContentChange = (id, content) => {
    dispatch(UpdateNoteContent({ id, content }));
  };

  return (
    <div className="notes-container">
      {FilterNote.map((note) => {
        const noteStyle = {
          backgroundColor: note.color,
          padding: "10px",
          borderRadius: "5px",
          margin: "10px",
          flex: "1 1 30%",
          boxSizing: "border-box",
        };

        const Days = [
          "Sunday", // Adjusted for zero-based index
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        let FullDay = Days[note.day] || ""; // Adjusted for zero-based index

        return (
          <div
            className="Notes d-flex flex-column note-item"
            style={noteStyle}
            key={note.id}
          >
            <input
              type="text"
              placeholder="Title"
              value={note.title || ""}
              onChange={(e) => HandleTitleChange(note.id, e.target.value)}
            />
            <textarea
              rows={20}
              cols={20}
              placeholder="Enter Here"
              value={note.content || ""}
              onChange={(e) => HandleContentChange(note.id, e.target.value)}
            ></textarea>
            <div className="DateDiv">
              <p>
                {FullDay} {note.date}
                <button
                  className="bin btn-primary rounded-circle float-end"
                  onClick={() => {
                    dispatch(RemoveNote(note.id));
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
