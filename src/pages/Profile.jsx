import { getLists } from "../utils/localStorage";
import ReadingListCard from "../component/ReadingListCard";
import { useState } from "react";
import { saveLists } from "../utils/localStorage";
const Profile = () => {
  const [lists, setLists] = useState(getLists());

  const handleDelete = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);

    setLists(updatedLists);

    saveLists(updatedLists);
  };
  return (
    <>
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
    </>
  );
};

export default Profile;
