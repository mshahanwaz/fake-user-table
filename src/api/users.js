import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(URL);
