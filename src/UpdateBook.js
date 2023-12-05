import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import UpdateBookForm from "./UpdateBookForm";
const UpdateBookPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <UpdateBookForm/>
        </div>
      );
    };
    export default UpdateBookPage;