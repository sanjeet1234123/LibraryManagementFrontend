import React, { useState } from "react";
import "./Request.css";

function UpdateUserForm() {
  const [id, setId] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "id") {
      setId(value);
    } else if (name === "role") {
      setRole(value);
    }
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (!id || !role) {
      alert("Please provide both ID and Role to update");
      return;
    }

    const requestBody = {
      role: role,
    };

    try {
      const response = await fetch(`http://localhost:8870/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("User updated successfully!");
        setId("");
        setRole("");
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
        <h1>Update User</h1>
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
          placeholder="User ID"
        />
        <input
          type="text"
          name="role"
          value={role}
          onChange={handleChange}
          placeholder="New Role"
        />
        <button className="general-btn" type="submit">
          Update User
        </button>
      </form>
    </div>
  );
}

export default UpdateUserForm;