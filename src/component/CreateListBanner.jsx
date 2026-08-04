import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";

const CreateListBanner = ({ onOpen }) => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="mt-8 h-[170px] rounded-md overflow-hidden bg-[#178A12] flex justify-between relative">
      {/* Left */}
      <div className="flex flex-col justify-center px-4 w-3/4 text-white">
        <h2 className="text-xl font-bold leading-tight">
          Create a list to easily organize and share stories
        </h2>

        <button
          className="mt-8 w-fit bg-[#242424] text-white px-4 py-2 rounded-full text-[14px] hover:bg-black transition cursor-pointer"
          onClick={onOpen}
        >
          Start a list
        </button>
      </div>

      {/* Right */}
      <div className="absolute bottom-2 right-2 flex flex-col justify-center">
        <div className="w-[80px] h-[80px] rounded-full bg-[#46A53D] flex items-center justify-center">
          <div className="w-[28px] h-[28px] rounded-full p-1 bg-white flex items-center justify-center">
            <FiBookmark className="text-[24px] text-[#178A12]" />
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setShowBanner(false)}
        className="absolute top-5 right-5 text-white text-2xl cursor-pointer hover:rotate-90 transition-transform duration-300"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default CreateListBanner;
