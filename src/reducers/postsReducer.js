import { FETCH_COMMENTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      const posts = action.payload.data;

      return [...state, ...posts];
    default:
      return state;
  }
}
