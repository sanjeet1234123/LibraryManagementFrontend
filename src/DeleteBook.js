import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import DeleteBookForm from './DeleteBookForm';

const DeleteBookPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <DeleteBookForm/>
        </div>
      );
    };
    export default DeleteBookPage;