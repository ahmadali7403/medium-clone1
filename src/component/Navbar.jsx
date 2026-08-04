
import NavLeftSide from "./NavLeftSide";
import NavRightSide from "./NavRightSide";

const Navbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center px-6 py-1 border-b border-gray-300">
      <NavLeftSide setIsSidebarOpen={setIsSidebarOpen} />
      <NavRightSide />
    </div>
  );
};

export default Navbar;
