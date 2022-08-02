import { Action, SETTING } from "../ActionTypes/ActionTypes";

export default function settingsReducer(state: any = {}, action: Action) {
  switch (action.type) {
    case SETTING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
