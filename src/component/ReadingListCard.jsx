import { MdDeleteOutline } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const ReadingListCard = ({
  id,
  title = "Reading list",
  onDelete,
  isDefault = false,
}) => {
  return (
    <div className="mt-8 bg-[#F5F5F5] rounded-md flex overflow-hidden">
      {/* Left */}
      <div className="w-2/3 p-4 flex flex-col justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-[#1A8917] text-white flex items-center justify-center text-[10px] font-medium">
            A
          </div>

          <span className="text-[14px] text-[#242424]">Ahmadali</span>
        </div>

        <h2 className="text-[18px] font-bold text-[#242424]">{title}</h2>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mt-1 text-[#6B6B6B] text-[12px]">
              <span>No stories</span>

              <FiLock />
            </div>
            {!isDefault && (
              <MdDeleteOutline
                onClick={() => onDelete(id)}
                className="text-[26px] text-[#6B6B6B] hover:text-red-600 transition cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="flex flex-1 w-1/3 gap-[2px]">
        <div className="flex-1 bg-[#e9e7e7]"></div>
        <div className="flex-1 bg-[#e9e7e7]"></div>
        <div className="flex-1 bg-[#e9e7e7]"></div>
      </div>
    </div>
  );
};

export default ReadingListCard;
