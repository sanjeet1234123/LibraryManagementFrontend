import React from "react";
import "./Request.css";

function IssueForm() {
  const [state, setState] = React.useState({
    ISBN: "",
    ReaderID: "",
    IssueApproverID: "",
    IssueStatus: "",
    IssueDate: "",
    ExpectedReturnDate: "",
    ReturnDate: "",
    ReturnApproverID: "",
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

    const {
      ISBN,
      ReaderID,
      IssueApproverID,
      IssueStatus,
      IssueDate,
      ExpectedReturnDate,
      ReturnDate,
      ReturnApproverID,
    } = state;

    if (
      !ISBN ||
      !ReaderID ||
      !IssueApproverID ||
      !IssueStatus ||
      !IssueDate ||
      !ExpectedReturnDate ||
      !ReturnDate ||
      !ReturnApproverID
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const requestBody = {
      ISBN:parseInt(ISBN),
      ReaderID: parseInt(ReaderID),
      IssueApproverID: parseInt(IssueApproverID),
      IssueStatus,
      IssueDate,
      ExpectedReturnDate,
      ReturnDate,
      ReturnApproverID: parseInt(ReturnApproverID),
    };

    try {
      const response = await fetch("http://localhost:8870/issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Issue created successfully!");
        const emptyState = {
          ISBN: "",
          ReaderID: "",
          IssueApproverID: "",
          IssueStatus: "",
          IssueDate: "",
          ExpectedReturnDate: "",
          ReturnDate: "",
          ReturnApproverID: "",
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
        <h1>Issue Registry</h1>
        <input
          type="text"
          name="ISBN"
          value={state.ISBN}
          onChange={handleChange}
          placeholder="ISBN"
        />
        <input
          type="text"
          name="ReaderID"
          value={state.ReaderID}
          onChange={handleChange}
          placeholder="Reader ID"
        />
        <input
          type="text"
          name="IssueApproverID"
          value={state.IssueApproverID}
          onChange={handleChange}
          placeholder="Issue Approver ID"
        />
        <input
          type="text"
          name="IssueStatus"
          value={state.IssueStatus}
          onChange={handleChange}
          placeholder="Issue Status"
        />
        <input
          type="text"
          name="IssueDate"
          value={state.IssueDate}
          onChange={handleChange}
          placeholder="Issue Date"
          pattern="\d{4}-\d{2}-\d{2}"
         title="Enter a date in the format YYYY-MM-DD"
        />
        <input
          type="text"
          name="ExpectedReturnDate"
          value={state.ExpectedReturnDate}
          onChange={handleChange}
          placeholder="Expected Return Date"
          pattern="\d{4}-\d{2}-\d{2}"
         title="Enter a date in the format YYYY-MM-DD"
        />
        <input
         type="text"
         name="ReturnDate"
         value={state.ReturnDate}
         onChange={handleChange}
         placeholder="Enter Return Date"
         pattern="\d{4}-\d{2}-\d{2}"
         title="Enter a date in the format YYYY-MM-DD"
        />
        <input
          type="text"
          name="ReturnApproverID"
          value={state.ReturnApproverID}
          onChange={handleChange}
          placeholder="Return Approver ID"
        />
        <button className="general-btn" type="submit">
          Submit Issue
        </button>
      </form>
    </div>
  );
}

export default IssueForm;