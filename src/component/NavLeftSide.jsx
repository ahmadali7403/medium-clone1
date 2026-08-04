import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const NavLeftSide = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex items-center space-x-4">
      <HamburgerMenu setIsSidebarOpen={setIsSidebarOpen} />
      <Logo />
    </div>
  );
};

export default NavLeftSide;
