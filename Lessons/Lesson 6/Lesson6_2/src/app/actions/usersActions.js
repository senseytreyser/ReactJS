import dispatcher from "../dispatcher";
import { GET_USERS } from "../constants/postConstants";
import axios from "axios";

export function getUsers() {
  axios.get("http://jsonplaceholder.typicode.com/users/").then(response => {
    dispatcher.dispatch({
      type: GET_USERS,
      data: response.data
    });
  });
}
