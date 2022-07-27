import { MODAL } from "../ActionTypes/ActionTypes";

export default function modalReducer(state = 0, action) {
  switch (action.type) {
    case MODAL:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
