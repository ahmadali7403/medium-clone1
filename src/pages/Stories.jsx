import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const [activeTab, setActiveTab] = useState("drafts");

  const tabs = [
    { id: "drafts", label: "Drafts" },
    { id: "scheduled", label: "Scheduled" },
    { id: "published", label: "Published" },
    { id: "unlisted", label: "Unlisted" },
    { id: "submissions", label: "Submissions" },
  ];

  return (
    <div className=" mx-auto px-10 py-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold text-[#242424]">Stories</h1>

        <button className="border border-black rounded-full px-3 py-1.5 hover:bg-gray-100 transition cursor-pointer text-xs">
          Import a story
        </button>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-200">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 cursor-pointer transition text-xs ${
                activeTab === tab.id
                  ? "border-b border-black text-[#242424]"
                  : "text-[#6B6B6B] hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-18 flex items-center justify-center">
        {activeTab === "drafts" && (
          <div className="text-center">
            <p className="text-base text-[#242424]">No stories in draft.</p>
          </div>
        )}

        {activeTab === "scheduled" && (
          <p className="text-base text-[#6B6B6B]">No scheduled stories.</p>
        )}

        {activeTab === "published" && (
          <p className="text-base text-[#6B6B6B]">No published stories yet.</p>
        )}

        {activeTab === "unlisted" && (
          <p className="text-base text-[#6B6B6B]">No unlisted stories.</p>
        )}

        {activeTab === "submissions" && (
          <p className="text-base text-[#6B6B6B]">No submission stories yet.</p>
        )}
      </div>
    </div>
  );
};

export default Stories;
