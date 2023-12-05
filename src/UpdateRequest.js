import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import UpdateRequestForm from "./UpdateRequestForm";
const UpdateRequestPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <UpdateRequestForm/>
        </div>
      );
    };
    export default UpdateRequestPage;