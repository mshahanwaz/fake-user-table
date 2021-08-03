import * as api from "../api/users";

export const fetchUsers = () => async (dispatch) => {
  const { data } = await api.fetchUsers();
  dispatch({ type: "FETCH", payload: data });
};

export const createUser = (user) => async (dispatch) => {
  dispatch({ type: "CREATE", payload: user });
};

export const updateUser = (user) => async (dispatch) => {
  dispatch({ type: "UPDATE", payload: user });
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "DELETE", payload: id });
};
