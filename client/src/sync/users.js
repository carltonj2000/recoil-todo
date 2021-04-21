let id = 0;
const nextId = () => id++;

const tableOfUsers = [
  { userId: nextId(), name: "carlton" },
  { userId: nextId(), name: "tina" },
  { userId: nextId(), name: "cheryl" },
  { userId: nextId(), name: "jeffrey" },
];

export default tableOfUsers;
