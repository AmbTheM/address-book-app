import { LOADING, ActionLoad } from "../ActionTypes/ActionTypes";

export default function loadingReducer(
  state: boolean = false,
  action: ActionLoad
) {
  switch (action.type) {
    case LOADING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
