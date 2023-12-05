import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import AddBookForm from "./AddBookForm";
const AddBookPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <AddBookForm/>
        </div>
      );
    };
    export default AddBookPage;