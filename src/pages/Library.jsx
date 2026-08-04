import { useState } from "react";
import CreateListBanner from "../component/CreateListBanner";
import ReadingListCard from "../component/ReadingListCard";
import ListModal from "../component/ListModal";
const Library = () => {
  const [activeTab, setActiveTab] = useState("yourLists");
  const [lists, setLists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[#242424]">Your library</h1>

        <button
          className="bg-[#1A8917] hover:bg-[#156d13] text-white px-6 py-[10px] rounded-full text-[15px] font-medium transition cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          New list
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-10 mt-8 border-b border-gray-200">
        <TabButton
          text="Your lists"
          active={activeTab === "yourLists"}
          onClick={() => setActiveTab("yourLists")}
        />

        <TabButton
          text="Saved lists"
          active={activeTab === "savedLists"}
          onClick={() => setActiveTab("savedLists")}
        />

        <TabButton
          text="Highlights"
          active={activeTab === "highlights"}
          onClick={() => setActiveTab("highlights")}
        />

        <TabButton
          text="Reading history"
          active={activeTab === "history"}
          onClick={() => setActiveTab("history")}
        />

        <TabButton
          text="Responses"
          active={activeTab === "responses"}
          onClick={() => setActiveTab("responses")}
        />
      </div>

      {/* Content */}

      <div className="mt-2">
        {activeTab === "yourLists" && (
          <>
            <CreateListBanner onOpen={() => setShowModal(true)} />
            <>
              {/* Default Card */}
              <ReadingListCard title="Reading list" />

              {/* User Created Lists */}

              {lists.map((list) => (
                <ReadingListCard key={list.id} title={list.title} />
              ))}
            </>{" "}
          </>
        )}

        {activeTab === "savedLists" && (
          <div className="text-gray-500 py-20 text-center">
            No lists from others
          </div>
        )}

        {activeTab === "highlights" && (
          <div className="text-gray-500 py-20 text-center">
            No highlights yet
          </div>
        )}

        {activeTab === "history" && (
          <div className="text-gray-500 py-20 text-center">
            Blogs you read will appear here
          </div>
        )}

        {activeTab === "responses" && (
          <div className="text-gray-500 py-20 text-center">
            No responses yet
          </div>
        )}
      </div>
      {showModal && (
        <ListModal
          onClose={() => setShowModal(false)}
          lists={lists}
          setLists={setLists}
        />
      )}
    </div>
  );
};

const TabButton = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`pb-4 text-[14px] transition cursor-pointer ${
        active
          ? "text-[#242424] border-b-1 border-black"
          : "text-[#6B6B6B] hover:text-black"
      }`}
    >
      {text}
    </button>
  );
};

export default Library;
