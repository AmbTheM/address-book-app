import { Dispatch } from "redux";
import { MODAL } from "../ActionTypes/ActionTypes";
export function ModalAction(payload: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: MODAL,
      payload: payload,
    });
  };
}
