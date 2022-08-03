import { Dispatch } from "redux";
import { UserData } from "../../Services/Database/DataType";
import { SEARCHING } from "../ActionTypes/ActionTypes";

export function searchData(data: UserData[]) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SEARCHING,
      payload: data,
    });
  };
}
