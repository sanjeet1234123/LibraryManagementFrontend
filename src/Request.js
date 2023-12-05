import React from 'react';
import Sidebar from "./NAV";
import Header from "./Header";
import RequestForm from "./RaiseRequest";



const RequestPage = () => {

return (
    <div className="home-page">
    <Header />
    <Sidebar/>
    <RequestForm/>
    </div>
  );
};
export default RequestPage;