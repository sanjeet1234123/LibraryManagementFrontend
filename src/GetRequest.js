import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import GetRequestForm from './GetRequestForm';

const GetRequestPage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <GetRequestForm/>
        </div>
      );
    };
    export default GetRequestPage;