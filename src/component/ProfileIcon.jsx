import { useNavigate } from "react-router-dom";

const ProfileIcon = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/profile")}
      className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold text-lg cursor-pointer"
    >
      A
    </div>
  );
};

export default ProfileIcon;
