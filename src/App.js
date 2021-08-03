import React, { useEffect } from "react";
import { fetchUsers } from "./actions/users";
import UserTable from "./components/UserTable";
import { useDispatch } from "react-redux";
import AddUser from "./components/AddUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="app">
      <AddUser />
      <UserTable />
    </div>
  );
}

export default App;
