import React from "react";
import "./Request.css";

function DeleteBookForm() {
  const [isbn, setISBN] = React.useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;
    setISBN(value);
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (!isbn) {
      alert("Please provide an ISBN to delete");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8870/book/${isbn}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Book deleted successfully!");
        setISBN(""); // Reset ISBN input
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
        <h1>Delete Book</h1>
        <input
          type="text"
          name="ISBN"
          value={isbn}
          onChange={handleChange}
          placeholder="ISBN to Delete"
        />
        <button className="general-btn" type="submit">
          Delete Book
        </button>
      </form>
    </div>
  );
}

export default DeleteBookForm;