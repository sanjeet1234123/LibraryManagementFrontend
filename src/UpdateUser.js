import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import UpdateUserForm from './UpdateUserForm';

const UpdateUserPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <UpdateUserForm/>
        </div>
      );
    };
    export default UpdateUserPage;