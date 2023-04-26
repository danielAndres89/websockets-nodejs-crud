import Note from "./models/note";

let notes = [];

export default (io) => {
  io.on("connection", (socket) => {
    console.log("nuevo socket connectado:", socket.id);

    const emitNotes = async () => {
      const notes = await Note.find();
      console.log(notes);

      io.emit("server:loadnotes", notes);
    };

    emitNotes();

    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const saveNote = await newNote.save();

      socket.emit("server:newnote", saveNote);
    });
  });
};
