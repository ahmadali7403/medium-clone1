import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { saveLists } from "../utils/localStorage";
const CreateListModal = ({ onClose, lists, setLists }) => {
  const [title, setTitle] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center m8">
        <div className="relative bg-white rounded-md shadow-xl px-8 py-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-2xl text-gray-500 hover:text-black cursor-pointer"
          >
            <IoClose />
          </button>

          {/* Title */}
          <h1 className="text-[28px] font-bold text-[#242424]">
            Create new list
          </h1>

          {/* Input */}
          <div className="mt-6">
            <input
              type="text"
              maxLength={60}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give it a name"
              className="rounded-lg border border-black px-1 py-1 text-lg outline-none"
            />

            <div className="text-right text-gray-500 mt-2">
              {title.length}/60
            </div>
          </div>

          {/* Description */}
          <button className="mt-5 text-[#1A8917] text-lg font-medium hover:underline cursor-pointer">
            Add a description
          </button>

          {/* Checkbox */}
          <div className="mt-5 flex items-center gap-4">
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
              className="w-4 h-4 cursor-pointer"
            />

            <span className="text-lg">Make it private</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-5">
            <button
              onClick={onClose}
              className="border border-black rounded-lg px-4 py-1 text-base  hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>

            <button
              disabled={!title.trim()}
              onClick={() => {
                const newList = {
                  id: Date.now(),
                  title,
                };

                const updatedLists = [...lists, newList];

                setLists(updatedLists);

                saveLists(updatedLists);

                onClose();
              }}
              className={`rounded-full px-4 py-1 text-base text-white cursor-pointer transition ${
                title.trim()
                  ? "bg-[#1A8917] hover:bg-[#156d13]"
                  : "bg-[#A8D5A2] cursor-not-allowed"
              }`}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListModal;
