import React from "react";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary.jsx";
import Apps from "./Apps.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";
import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import WatchList from "./WatchList.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/holdings" element={<Holdings />} />
          <Route exact path="/position" element={<Positions />} />
          <Route exact path="/funds" element={<Funds />} />
          <Route exact path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
