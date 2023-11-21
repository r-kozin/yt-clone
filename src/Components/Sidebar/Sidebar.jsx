import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar_section">
        <div className="sidebar_items">
          <div className="sidebar_item" id="feed">
            <div className="sidebar_icon">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
          <div className="sidebar_item">
            <div className="sidebar_icon">
              <HomeIcon />
            </div>
            <p>Home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
