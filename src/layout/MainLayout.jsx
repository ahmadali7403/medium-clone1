import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../component/Navbar";
import NavigationSidebar from "../component/NavigationSidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isSidebarOpen);
  return (
    <>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />

      <NavigationSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Outlet />
    </>
  );
};

export default MainLayout;
