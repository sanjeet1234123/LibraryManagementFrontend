import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import BooksDetailsForm from './BooksDetailsForm';

const BooksDetailsPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <BooksDetailsForm/>
        </div>
      );
    };
    export default BooksDetailsPage;