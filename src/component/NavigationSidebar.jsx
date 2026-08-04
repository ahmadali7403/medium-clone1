import {
  FiHome,
  FiBookmark,
  FiUser,
  FiEdit,
  FiBarChart2,
  FiUsers,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[320px] bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-5 px-8 h-20 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-black transition"
          >
            <HamburgerMenu />
          </button>

          <Logo />
        </div>

        {/* Menu */}
        <div className="px-8 py-7">
          <MenuItem icon={<FiHome />} text="Home" to="/" onclose={onClose} />

          <MenuItem
            icon={<FiBookmark />}
            text="Library"
            to="/library"
            onclose={onClose}
          />

          <MenuItem
            icon={<FiUser />}
            text="Profile"
            to="/profile"
            onclose={onClose}
          />

          <MenuItem
            icon={<FiEdit />}
            text="Stories"
            to="/stories"
            onclose={onClose}
          />

          <MenuItem
            icon={<FiBarChart2 />}
            text="Stats"
            to="/stats"
            onclose={onClose}
          />

          <hr className="my-7" />

          <MenuItem icon={<FiUsers />} text="Following" />

          <MenuItem
            icon={<FiPlus />}
            text="Find writers and publications to follow"
          />

          <button className="mt-5 text-gray-600 underline hover:text-black">
            See suggestions
          </button>
        </div>
      </aside>
    </>
  );
};

const MenuItem = ({ icon, text, active, to, onclose }) => {
  return (
    <Link
      onClick={onclose}
      to={to}
      className={`flex items-center gap-5 w-full py-4 text-left cursor-pointer transition ${
        active ? "text-black font-medium" : "text-gray-500 hover:text-black"
      }`}
    >
      <span className="text-[28px]">{icon}</span>
      <span className="text-[20px]">{text}</span>
    </Link>
  );
};

export default Sidebar;
