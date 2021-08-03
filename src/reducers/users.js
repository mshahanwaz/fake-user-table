// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "CREATE":
      return [...users, action.payload];
    case "DELETE":
      return users.filter((user) => user.id !== action.payload);
    case "UPDATE":
      return users.map((user) =>
        action.payload.id === user.id ? action.payload : user
      );
    default:
      return users;
  }
};
