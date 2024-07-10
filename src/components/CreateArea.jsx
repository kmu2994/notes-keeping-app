import { useState } from "react";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [newNote, updateContent] = useState({ title: "", content: "" });
  const [isExpanded, updateExpanded] = useState(false);

  function expand() {
    updateExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    updateContent((prevNote) => {
      return {
        ...prevNote,
        // square brackets are used to access the value of a variable
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={newNote.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              event.preventDefault();

              // Send a POST request to the server with the new note
              fetch(props.backendUrl + "/notes", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(newNote), // send the new note as JSON
              })
                .then((response) => response.json())
                .then((data) => {
                  // Add the new note to the state
                  props.onSubmit(data);
                  updateContent({ title: "", content: "" });
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
