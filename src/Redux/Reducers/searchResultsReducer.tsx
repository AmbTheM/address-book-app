import { UserData } from "../../Services/Database/DataType";
import { ActionSearch, SEARCHING } from "../ActionTypes/ActionTypes";

export default function searchResultReducer(
  state: UserData[] = [],
  action: ActionSearch
) {
  switch (action.type) {
    case SEARCHING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
