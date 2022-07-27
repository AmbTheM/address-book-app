import { MODAL } from "../ActionTypes/ActionTypes";
export function ModalAction(payload) {
  return (dispatch) => {
    dispatch({
      type: MODAL,
      payload: payload,
    });
  };
}
