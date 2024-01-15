export function CreateTodo() {
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
  
    return (
      <div style={containerStyle}>
        <input type="text" placeholder="title" style={inputStyle} />
        <br />
        <input type="text" placeholder="description" style={inputStyle} />
        <br />
        <button style={buttonStyle}>Add</button>
      </div>
    );
  }
  