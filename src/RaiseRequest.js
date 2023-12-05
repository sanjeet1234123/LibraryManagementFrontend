import React from "react";
import "./Request.css";

function RequestForm() {
  const [state, setState] = React.useState({
    reqId: "",
    bookId: "",
    readerId: "",
    requestDate: "",
    approvalDate: "",
    approverId: "31",
    requestType: "Pending", 
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

    const { reqId, bookId, readerId, requestDate, approvalDate, approverId, requestType } = state;
    if (!reqId || !bookId || !readerId || !requestDate || !approvalDate || !approverId || !requestType) {
      alert("Please fill in all required fields");
      return;
    }

    const requestBody = {
      reqId: parseInt(reqId),
      bookId: parseInt(bookId),
      readerId: parseInt(readerId),
      requestDate,
      approvalDate,
      approverId: parseInt(approverId),
      requestType,
    };

    try {
      const response = await fetch("http://localhost:8870/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Request raised successfully!");
        const emptyState = {
          reqId: "",
          bookId: "",
          readerId: "",
          requestDate: "",
          approvalDate: "",
          approverId: "31",
          requestType: "Pending", 
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
        <h1>Raise Request</h1>
        <input
          type="text"
          name="reqId"
          value={state.reqId}
          onChange={handleChange}
          placeholder="Req Id"
        />
        <input
          type="text"
          name="bookId"
          value={state.bookId}
          onChange={handleChange}
          placeholder="Book Id"
        />
        <input
          type="text"
          name="readerId"
          value={state.readerId}
          onChange={handleChange}
          placeholder="Reader Id"
        />
        <input
          type="text"
          name="requestDate"
          value={state.requestDate}
          onChange={handleChange}
          placeholder="Request Date"
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter a date in the format YYYY-MM-DD"
        />
        <input
          type="text"
          name="approvalDate"
          value={state.approvalDate}
          onChange={handleChange}
          placeholder="Approval Date"
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter a date in the format YYYY-MM-DD"
        />
        <input
          type="text"
          name="approverId"
          value="31"
          disabled
        />
        
        <input
          type="text"
          name="requestType"
          value="Pending"
          disabled
        />
        <button className="general-btn" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;