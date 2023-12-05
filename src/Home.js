
import React from 'react';
import Sidebar from "./NAV";
import Header from "./Header";
import Dashboard from "./Dashboard";



const HomePage = () => {


  return (
    <div className="home-page">
    <Header />
    <Sidebar/>
    <Dashboard />
    </div>
  );
};

export default HomePage;
