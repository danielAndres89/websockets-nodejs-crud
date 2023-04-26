import Note from "./models/note";

export default (io) => {
  io.on("connection", (socket) => {
    console.log("New user connected");

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
