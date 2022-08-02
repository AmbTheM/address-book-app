import { UserData } from "../../Services/Database/DataType";
import { STORING, ActionStoreData } from "../ActionTypes/ActionTypes";

export default function dataReducer(
  state: UserData[] = [],
  action: ActionStoreData
) {
  switch (action.type) {
    case STORING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
