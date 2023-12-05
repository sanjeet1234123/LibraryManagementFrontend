import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
    id: "",
    name: "",
    email: "",
    contactNumber: "",
    role: "",
    libId: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    
    setState({
      ...state,
      [name]: value,
    });
  };

  const isEmailValid = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(state.email);
  };

  const isContactNumberValid = () => {
    const regex = /^\d{10}$/;
    return regex.test(state.contactNumber);
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { id, name, email, contactNumber, role, libId, password } = state;
    if (!id || !name || !role || !libId || !password) {
      alert("Please fill in all required fields");
      return;
    }

    if (!isEmailValid()) {
      alert("Please enter a valid email address");
      return;
    }

    if (!isContactNumberValid()) {
      alert("Please enter a valid 10-digit contact number");
      return;
    }
     
    const requestBody = {
      id: parseInt(id),
      name,
      email,
      contact_number: contactNumber,
      role,
      lib_id: parseInt(libId),
      password,
    };

    try {
      const response = await fetch("http://localhost:8870/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("User created successfully!");
        const emptyState = {
          id: "",
          name: "",
          email: "",
          contactNumber: "",
          role: "",
          libId: "",
          password: "",
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
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="id"
          value={state.id}
          onChange={handleChange}
          placeholder="ID"
        />
        <input
          type="text"
          name="contactNumber"
          value={state.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
        />
        <input
          type="text"
          name="role"
          value={state.role}
          onChange={handleChange}
          placeholder="Role"
        />
        <input
          type="text"
          name="libId"
          value={state.libId}
          onChange={handleChange}
          placeholder="LibId"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUpForm;