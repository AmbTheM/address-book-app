import { UserData } from "../../Services/Database/DataType";
import { STORING, Action } from "../ActionTypes/ActionTypes";

export default function dataReducer(state: any = [], action: Action) {
  switch (action.type) {
    case STORING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
