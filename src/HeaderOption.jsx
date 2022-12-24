import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="header_option">
      {Icon && <Icon className="header_option_icon" />}
      {avatar && <Avatar className="header_option_avatar" src={avatar} />}

      <h3 className="header_option_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
