import { Dispatch } from "redux";
import { SEARCHING } from "../ActionTypes/ActionTypes";

export function searchData(terms: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SEARCHING,
      payload: terms,
    });
  };
}
