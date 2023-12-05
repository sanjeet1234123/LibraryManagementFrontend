import React from "react";
import "./Request.css";

function UpdateRequestForm() {
  const [state, setState] = React.useState({
    reqid: "",
    ApprovalDate: "",
    ApproverID: "31",
    RequestType: "Approved",
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

    const { reqid, ApprovalDate, ApproverID, RequestType } = state;

    if (!reqid || !ApprovalDate || !ApproverID) {
      alert("Please fill in all required fields");
      return;
    }

    const requestBody = {
      ApprovalDate,
      ApproverID: parseInt(ApproverID),
      RequestType, 
    };

    try {
      const response = await fetch(`http://localhost:8870/request/${reqid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        alert("Request updated successfully!");
        const emptyState = {
          reqid: "",
          ApprovalDate: "",
          ApproverID: "31",
          RequestType: "Approved",
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
        <h1>Update Request</h1>
        <input
          type="text"
          name="reqid"
          value={state.reqid}
          onChange={handleChange}
          placeholder="Request ID"
        />
        <input
          type="text"
          name="ApprovalDate"
          value={state.ApprovalDate}
          onChange={handleChange}
          placeholder="Approval Date"
          pattern="\d{4}-\d{2}-\d{2}"
          title="Enter a date in the format YYYY-MM-DD"
        />
        <input
          type="text"
          name="ApproverID"
          value="31"
          onChange={handleChange}
          placeholder="Approver ID"
          readOnly
        />
        
        <input
          type="text"
          name="RequestType"
          value={state.RequestType}
          onChange={handleChange}
          placeholder="Request Type"
          readOnly 
        />
        <button className="general-btn" type="submit">
          Update Request
        </button>
      </form>
    </div>
  );
}

export default UpdateRequestForm;