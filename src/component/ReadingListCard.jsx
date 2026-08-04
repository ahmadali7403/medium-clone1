import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiLock } from "react-icons/fi";

const ReadingListCard = ({ title = "Reading List" }) => {
  return (
    <div className="mt-8 bg-[#F5F5F5] rounded-md flex overflow-hidden">
      {/* Left */}
      <div className="w-2/3 p-7 flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1A8917] text-white flex items-center justify-center text-sm">
            A
          </div>

          <span className="text-[14px] text-[#242424]">Ahmadali</span>
        </div>

        <div>
          <h2 className="text-[18px] font-bold text-[#242424]">{title}</h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mt-2 text-[#6B6B6B] text-[14px]">
              <span>No stories</span>

              <FiLock />
            </div>
            <HiOutlineDotsHorizontal className="text-[18px] text-[#6B6B6B] hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex flex-1 w-1/3 gap-1">
        <div className="flex-1 bg-[#e9e7e7]"></div>
        <div className="flex-1 bg-[#e9e7e7]"></div>
        <div className="flex-1 bg-[#e9e7e7]"></div>
      </div>
    </div>
  );
};

export default ReadingListCard;
