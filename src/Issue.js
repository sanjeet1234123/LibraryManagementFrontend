import React from 'react';
import SidebarAdmin from "./NavAdmin";
import Header from "./Header";
import IssueForm from "./IssueForm";
const IssuePage = () => {

    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <IssueForm/>
        </div>
      );
    };
    export default IssuePage;