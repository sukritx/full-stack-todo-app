import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const containerStyle = {
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#61dbfb',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Todo added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <div style={containerStyle}>
      <input
        id="title"
        type="text"
        placeholder="title"
        style={inputStyle}
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <input
        id="desc"
        type="text"
        placeholder="description"
        style={inputStyle}
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />
      <button style={buttonStyle} onClick={handleAddTodo}>
        Add a todo
      </button>
    </div>
  );
}
