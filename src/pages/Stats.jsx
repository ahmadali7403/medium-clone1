import { useState } from "react";
import { FiChevronDown, FiInfo } from "react-icons/fi";

const Stats = () => {
  const [activeTab, setActiveTab] = useState("stories");

  return (
    <div className=" mx-auto px-8 py-6">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-[#242424]">Stats</h1>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-200">
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab("stories")}
            className={`pb-3 cursor-pointer transition text-xs ${
              activeTab === "stories"
                ? "border-b border-black text-black"
                : "text-[#6B6B6B] hover:text-black"
            }`}
          >
            Stories
          </button>

          <button
            onClick={() => setActiveTab("audience")}
            className={`pb-3 cursor-pointer transition text-xs ${
              activeTab === "audience"
                ? "border-b border-black text-black"
                : "text-[#6B6B6B] hover:text-black"
            }`}
          >
            Audience
          </button>
        </div>
      </div>

      {/* Stories Tab */}
      {activeTab === "stories" && (
        <>
          <div className="flex items-center justify-between mt-8">
            <div>
              <h2 className="text-xl font-bold text-[#242424]">Monthly</h2>

              <p className="mt-2 text-[#6B6B6B] text-xs">
                August 1, 2026 – Today (UTC) · Updated hourly
              </p>
            </div>

            <button className="flex items-center gap-3 border rounded-full px-2 py-1 cursor-pointer hover:bg-gray-100 transition text-xs">
              August 2026
              <FiChevronDown />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 mt-8 gap-6">
            <StatItem value="0" label="Pres." info />

            <StatItem value="0" label="Views" />

            <StatItem value="0" label="Reads" />

            <StatItem value="0" label="Follower" />

            <StatItem value="0" label="Subs." />
          </div>
        </>
      )}

      {/* Audience Tab */}
      {activeTab === "audience" && (
        <div className=" flex items-center justify-center mt-20 text-center">
          <p className="text-xl text-[#6B6B6B]">No audience data available.</p>
        </div>
      )}
    </div>
  );
};

const StatItem = ({ value, label, info }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#242424]">{value}</h2>

      <div className="flex items-center gap-1 mt-3">
        <span className="text-xs text-[#242424]">{label}</span>

        {info && <FiInfo className="text-gray-500 text-[10px]" />}
      </div>
    </div>
  );
};

export default Stats;
