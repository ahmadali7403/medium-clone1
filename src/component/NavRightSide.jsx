import React from "react";
import SearchIcon from "./SearchIcon";
import ProfileIcon from "./ProfileIcon";

const NavRightSide = () => {
  return (
    <div className="flex items-center space-x-6">
      <SearchIcon />
      <ProfileIcon />
    </div>
  );
};

export default NavRightSide;
