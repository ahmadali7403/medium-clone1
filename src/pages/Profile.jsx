import { getLists } from "../utils/localStorage";
import ReadingListCard from "../component/ReadingListCard";
import { useState } from "react";
import { saveLists } from "../utils/localStorage";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Profile = () => {
  const [lists, setLists] = useState(getLists());

  const [activeTab, setActiveTab] = useState("home");
  const handleDelete = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);

    setLists(updatedLists);

    saveLists(updatedLists);
  };
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-[#1A8917] text-white flex items-center justify-center text-2xl font-medium">
            A
          </div>

          {/* Name */}
          <h1 className="text-[22px] font-semibold text-[#242424]">Ahmadali</h1>
        </div>

        {/* More */}
        <button className="cursor-pointer text-[#6B6B6B] hover:text-black transition">
          <HiOutlineDotsHorizontal className="text-[20px]" />
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-[26px] border-b border-gray-200">
        <div className="flex gap-7">
          {["home", "reposts", "activity", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[12px] cursor-pointer transition ${
                activeTab === tab
                  ? "border-b border-black text-black"
                  : "text-[#6B6B6B] hover:text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === "home" && (
          <div>
            {" "}
            <ReadingListCard title="Reading list" isDefault={true} />
            {lists.map((list) => (
              <ReadingListCard
                key={list.id}
                id={list.id}
                title={list.title}
                onDelete={handleDelete}
                isDefault={false}
              />
            ))}
          </div>
        )}

        {activeTab === "reposts" && (
          <div className="py-20 text-center text-gray-500">No reposts yet.</div>
        )}

        {activeTab === "activity" && (
          <div className="py-20 text-center text-gray-500">
            No activity yet.
          </div>
        )}

        {activeTab === "about" && (
          <div className="py-20 text-center text-gray-500">
            No bio available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
