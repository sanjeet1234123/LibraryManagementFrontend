import React from "react";
import { useNavigate } from "react-router";

function SignInForm() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({                                  //function to change the state when the new value is entered
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8870/user/login", {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const userData = await response.json();

        if (userData.role === "admin") {
          alert(`Admin login successful! Welcome, ${userData.user.name}`);
          navigate("/admin"); 
        } else {
          alert(`Reader login successful! Welcome, ${userData.user.name}`);
          navigate("/home"); 
        }
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }

    
    setState({
      email: "",                      
      password: "",
    });
  };

  return (
    <div className="form-container sign-in-container">
     
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          autocomplete="off"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        
        <button type="submit">Sign In</button>
      </form>
    </div>
    
  );
}

export default SignInForm;