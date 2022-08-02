import { ActionModal, MODAL } from "../ActionTypes/ActionTypes";

export default function modalReducer(state: number = 0, action: ActionModal) {
  switch (action.type) {
    case MODAL:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
