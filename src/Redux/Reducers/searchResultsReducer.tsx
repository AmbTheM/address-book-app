import { Action, SEARCHING } from "../ActionTypes/ActionTypes";

export default function searchResultReducer(state: any = [], action: Action) {
  switch (action.type) {
    case SEARCHING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
