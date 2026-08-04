import { useState } from "react";

const ForyouAndFeature = () => {
  const [activeTab, setActiveTab] = useState("foryou");

  return (
    <div className="sticky top-0 z-10 flex items-center border-b border-gray-300 bg-white px-4 py-4 text-[14px] text-gray-500">
      <div className="mr-10">
        <h2
          onClick={() => setActiveTab("foryou")}
          className={`inline-block cursor-pointer border-b-2 box-border ${
            activeTab === "foryou"
              ? "border-black text-black"
              : "border-transparent"
          }`}
        >
          For You
        </h2>
      </div>

      <div>
        <h2
          onClick={() => setActiveTab("featured")}
          className={`inline-block cursor-pointer border-b-2 box-border ${
            activeTab === "featured"
              ? "border-black text-black"
              : "border-transparent"
          }`}
        >
          Featured
        </h2>
      </div>
    </div>
  );
};

export default ForyouAndFeature;
