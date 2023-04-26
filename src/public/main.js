import { loadNotes, onNewNote } from "./socket.js";
import { appendNote, onHandleSubmit, renderNotes } from "./ui.js";

onNewNote(appendNote);
loadNotes(renderNotes);

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);
