import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = ({ setIsSidebarOpen }) => {
  return (
    <button onClick={() => setIsSidebarOpen(true)}>
      <RxHamburgerMenu className="text-[26px] cursor-pointer" />
    </button>
  );
};

export default HamburgerMenu;
