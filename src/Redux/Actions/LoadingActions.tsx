import { Dispatch } from "redux";
import { LOADING } from "../ActionTypes/ActionTypes";

export function setLoading(condition: boolean) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: LOADING,
      payload: condition,
    });
  };
}
