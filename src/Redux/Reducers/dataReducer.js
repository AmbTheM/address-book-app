import { STORING } from "../ActionTypes/ActionTypes";

export default function dataReducer(state = { storage: [] }, action) {
  switch (action.type) {
    case STORING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
