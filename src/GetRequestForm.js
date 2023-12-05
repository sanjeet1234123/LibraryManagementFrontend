import React, { useState, useEffect } from "react";
import "./Request.css";

function GetRequestForm() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await fetch("http://localhost:8870/getrequest");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRequests(data);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while fetching requests.");
    }
  };

  return (
    <div className="form-request-event-table">
      <h1 align="center">All Requests</h1>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Book ID</th>
            <th>Reader ID</th>
            <th>Request Date</th>
            <th>Approval Date</th>
            <th>Approver ID</th>
            <th>Request Type</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.reqId}>
              <td>{request.reqId}</td>
              <td>{request.bookId}</td>
              <td>{request.readerId}</td>
              <td>{request.requestDate}</td>
              <td>{request.approvalDate}</td>
              <td>{request.approverId}</td>
              <td>{request.requestType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetRequestForm;