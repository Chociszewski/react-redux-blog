import { FETCH_COMMENTS } from "./types";
import axios from "axios";

export function fetchComments() {
  const response = axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
