import { STORING } from "../ActionTypes/ActionTypes";

export function storeData(option) {
  return (dispatch) => {
    dispatch({
      type: STORING,
      payload: option,
    });
  };
}
