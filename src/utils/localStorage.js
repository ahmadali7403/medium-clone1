export const getLists = () => {
  const lists = localStorage.getItem("lists");
  return lists ? JSON.parse(lists) : [];
};

export const saveLists = (lists) => {
  localStorage.setItem("lists", JSON.stringify(lists));
};
