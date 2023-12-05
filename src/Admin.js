import React from 'react';
import Header from "./Header";
import SidebarAdmin from "./NavAdmin";
import Dashboard from "./Dashboard";
const AdminPage = () => {
    return (
        <div className="home-page">
        <Header />
        <SidebarAdmin/>
        <Dashboard/>
        </div>
    );
};
export default AdminPage;