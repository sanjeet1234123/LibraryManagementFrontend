
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin"
import Request from "./Request"
import Issue from "./Issue"
import AddBook from "./AddBook"
import DeleteBook from "./DeleteBook"
import UpdateUser from "./UpdateUser"
import GetRequest from "./GetRequest"
import BooksDetails from "./BooksDetails"
import UpdateBook from "./UpdateBook"
import UpdateRequest from "./UpdateRequest"
import './Home.css';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="request" element={<Request />} />
        <Route path="issue" element={<Issue />} />
        <Route path="addbook" element={<AddBook />} />
        <Route path="deletebook" element={<DeleteBook />} />
        <Route path="updateuser" element={<UpdateUser />} />
        <Route path="getrequest" element={<GetRequest />} />
        <Route path="booksdetails" element={<BooksDetails />} />
        <Route path="updatebook" element={<UpdateBook />} />
        <Route path="updaterequest" element={<UpdateRequest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,rootElement
);