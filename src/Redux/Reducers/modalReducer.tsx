import { Action, MODAL } from "../ActionTypes/ActionTypes";

export default function modalReducer(state: any = 0, action: Action) {
  switch (action.type) {
    case MODAL:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
