import { React, useState, useEffect } from "react";
import Button from "../components/Button";

function Input(props) {
  //-----------------------------------------------------------------
  const [notes, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [UpdateIndex, setUpdateIndex] = useState(-1);
  //-----------------------------------------------------------------
  useEffect(() => {
    // Update the local notes state when the prop changes in app component
    setNote(props.notes);
    setTitle(props.title);
    setContent(props.content);
    setUpdateIndex(props.UpdateIndex);
  }, [props.notes, props.title, props.content, props.UpdateIndex]); // Include props.updateIndex as a dependency
  //-----------------------------------------------------------------
  function handleChange(e) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  }
  function handleSubmit() {
    const newNote = { title: title, content: content };
    setNote((prevNotes) => [...prevNotes, newNote]); // Use a callback function
    props.getNotes([...notes, newNote]); // Pass the updated notes array
    props.setTitle("");
    props.setContent("");
  }
  function handleUpdate() {
    const updateNote = notes;
    updateNote[UpdateIndex] = {
      title: title,
      content: content,
    };
    // update the values in app component to reflect it on in this component by using useEffect
    props.setNotes([...updateNote]);
    props.setTitle("");
    props.setContent("");
    props.setUpdateIndex(-1);
    document.querySelector(".delete-button").style.display = "" ;
  }
  //-----------------------------------------------------------------
  return (
    <div className="input-area">
      <div className="input-container">
        <h1>Enter your Note </h1>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Content"
          name="content"
          value={content}
          onChange={(e) => handleChange(e)}
        />
        {UpdateIndex === -1 ? (
          <Button
            text={"Submit"}
            onClick={() => handleSubmit()}
            backgroundColor="#8b0000"
          />
        ) : (
          <Button
            text={"Update"}
            onClick={() => handleUpdate()}
            backgroundColor="#1034a6"
          />
        )}
      </div>
    </div>
  );
}

export default Input;
