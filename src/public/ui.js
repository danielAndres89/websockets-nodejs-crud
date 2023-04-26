//funciones para interacturar con el usuario
import { saveNote } from "./socket.js";

const noteList = document.querySelector("#notes");

const noteUI = (note) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div>
      <h2>${note.title}</h2>
      <p>${note.description}</p>
  </div>
  `;
  return div;
};

export const renderNotes = (notes) => {
  notes.forEach((note) => noteList.append(noteUI(note)));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const appendNote = (note) => {
  noteList.append(noteUI(note));
};
