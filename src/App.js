import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Card from "./components/Card";
function App() {
  //-----------------------------------------------------------------
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [UpdateIndex, setUpdateIndex] = useState(-1);
//-----------------------------------------------------------------
  function getNotes(n) {
    setNotes(n);
  }
  function deleteNote(index) {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }
  function onUpdate(index) {
    setTitle(notes[index].title);
    setContent(notes[index].content);
    document.querySelector(".delete-button").style.display = "none" ;
    setUpdateIndex(index);
  }

  return (
    <div>
      <Nav />
      <Input
        title={title}
        content={content}
        UpdateIndex={UpdateIndex}
        setTitle={setTitle}
        setContent={setContent}
        setUpdateIndex={setUpdateIndex}
        setNotes={setNotes}
        getNotes={getNotes}
        notes={notes}
      />
      {/* <hr /> */}
      <div className="card-container">
        {notes?.map((note, index) => (
          <Card
            key={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index)}
            onUpdate={() => onUpdate(index)}
            UpdateIndex = {UpdateIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
