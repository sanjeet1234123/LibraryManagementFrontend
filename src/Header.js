import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogout = () => {
    navigate("/");
    console.log("User logged out");
  };

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        // clear results and error message when search term is empty
        setSearchResult(null);
        setErrorMessage("Please enter a search term");
        return;
      }

      const response = await fetch(`http://localhost:8870/book/${searchTerm}`);
      if (!response.ok) {
        throw new Error("Book not found");
      }

      const data = await response.json();
      setSearchResult(data);
      setErrorMessage(null);
    } catch (error) {
      setSearchResult(null);
      setErrorMessage("Book not found");
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <div className="inner-container">
        <div className="logo">
          <img src="images/logo.png" alt="Xenonstack Library" />
          <span>
            Xenonstack <br /> Library Management System
          </span>
        </div>

        <div className="search">
          <input
            type="number" // Assuming ISBN is an integer
            placeholder="Search by ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {searchTerm && ( // only render if there is a search term
        <div className="search-result" align="center">
          {errorMessage ? (
            <h3>{errorMessage}</h3>
          ) : (
            <>
              <h3>Search Result</h3>
              {searchResult ? (
                <>
                  <p>Title: {searchResult.title}</p>
                  <p>Author: {searchResult.author}</p>
                  <p>Publisher: {searchResult.publisher}</p>
                  <p>Version: {searchResult.version}</p>
                </>
              ) : (
                <p>No match found</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}