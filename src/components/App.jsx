import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";

function App() {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://api.fuyuri.com";
  const [notes, updateNotes] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false); // Add this line

  const handleLogout = () => {
    // Add this function
    fetch(backendUrl + "/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        setLoggedIn(false);
        updateNotes([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(backendUrl + "/notes", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        updateNotes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Check if user is already logged in
    fetch(backendUrl + "/isAuthenticated", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isAuthenticated) {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addNote(note) {
    updateNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    fetch(backendUrl + `/notes/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        updateNotes((prevNotes) => {
          return prevNotes.filter((note) => {
            return note._id !== id;
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        backendUrl={backendUrl}
      />
      <CreateArea onSubmit={addNote} backendUrl={backendUrl} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
