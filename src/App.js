// import './App.css';
// import Main from './Components/Main';
// import Sidebar from './Components/Sidebar';
// import { useEffect, useState } from 'react';
// import uuid from 'react-uuid';

// function App() {

//   const [notes, setNotes] = useState([]);
//   const [activeNote, setActiveNote] = useState(false);

//   const onAddNote = () => {
//     const newNote = {
//       id: uuid(),
//       title: "Untitled Note",
//       body: "",
//       lastModified: Date.now(),
//     };

//     setNotes([newNote, ...notes]);
//   };


//   const onUpdateNote = (updatedNote) => {
//     const updatedNotesArray = notes.map((note) => {
//       if (note.id === activeNote){
//         return updatedNote;
//       }

//       return note;
//     });
//     setNotes(updatedNotesArray);
//   }

//   const onDeleteNote = (idToDelete) =>{
//     setNotes(notes.filter((note) => note.id !== idToDelete));
//   };

//   const getActiveNote = () => {
//     return notes.find((note) => note.id === activeNote);
//   }

//   return (
//     <div className="App">

//     <Sidebar notes = {notes}
//              onAddNote = {onAddNote}
//              onDeleteNote = {onDeleteNote}
//              activeNote = {activeNote}
//              setActiveNote = {setActiveNote}
//     />
//     <Main activeNote = {getActiveNote()}
//           onUpdateNote = {onUpdateNote}
//     />

//     </div>
//   );
// }

// export default App;




import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} 
            onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;