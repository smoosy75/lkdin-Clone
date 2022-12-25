import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <img src="public/Abstract-blue-and-orange-pattern.jpg" alt="" />
        <Avatar />
        <h2>Mustapha Saïd</h2>
        <h4>mustaphasaid.pr@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Vues de votre Profil</p>
          <p className="sidebar_statNumber">67</p>
        </div>
        <div className="sidebar_stat">
          <p>Impression de votre Poste</p>
          <p className="sidebar_statNumber">679</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>recent</p>
        {recentItem("Reactjs")}
        {recentItem("Ux/UI")}
        {recentItem("Data")}
        {recentItem("C++")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
