import React from "react";
import "./Request.css";

function UpdateBookForm() {
  const [state, setState] = React.useState({
    ISBN: "",
    Title: "",
    Author: "",
    Publisher: "",
    Version: "",
    TotalCopies: "",
    AvailableCopies: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { ISBN, Title, Author, Publisher, Version, TotalCopies, AvailableCopies } = state;

    if (!ISBN || !Title || !Author || !Publisher || !Version || !TotalCopies || !AvailableCopies) {
      alert("Please fill in all required fields");
      return;
    }

    const requestBody = {
      ISBN: parseInt(ISBN),
      Title,
      Author,
      Publisher,
      Version,
      TotalCopies: parseInt(TotalCopies),
      AvailableCopies: parseInt(AvailableCopies),
    };

    try {
      const response = await fetch(`http://localhost:8870/update/book/${ISBN}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Book updated successfully!");
        const emptyState = {
          ISBN: "",
          Title: "",
          Author: "",
          Publisher: "",
          Version: "",
          TotalCopies: "",
          AvailableCopies: "",
        };
        setState(emptyState);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="form-request-event">
      <form onSubmit={handleOnSubmit}>
        <h1>Update Book</h1>
        <input
          type="text"
          name="ISBN"
          value={state.ISBN}
          onChange={handleChange}
          placeholder="ISBN"
        />
        <input
          type="text"
          name="Title"
          value={state.Title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="Author"
          value={state.Author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          type="text"
          name="Publisher"
          value={state.Publisher}
          onChange={handleChange}
          placeholder="Publisher"
        />
        <input
          type="text"
          name="Version"
          value={state.Version}
          onChange={handleChange}
          placeholder="Version"
        />
        <input
          type="text"
          name="TotalCopies"
          value={state.TotalCopies}
          onChange={handleChange}
          placeholder="Total Copies"
        />
        <input
          type="text"
          name="AvailableCopies"
          value={state.AvailableCopies}
          onChange={handleChange}
          placeholder="Available Copies"
        />
        <button className="general-btn" type="submit">
          Update Book
        </button>
      </form>
    </div>
  );
}

export default UpdateBookForm;