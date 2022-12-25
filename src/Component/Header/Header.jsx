import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="public/linkedin.png" alt="logo" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Recherche" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeRoundedIcon} title="Accueil" />
        <HeaderOption Icon={SupervisorAccountRoundedIcon} title="Réseau" />
        <HeaderOption
          Icon={BusinessCenterRoundedIcon}
          title="Offres d'emploi"
        />
        <HeaderOption Icon={SmsRoundedIcon} title="Messagerie" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notification" />
        <HeaderOption avatar="/static/images/avatar/1.jpg" title="Vous" />
      </div>
    </div>
  );
}

export default Header;
