import { Dispatch } from "redux";
import { UserData } from "../../Services/Database/DataType";
import { STORING } from "../ActionTypes/ActionTypes";

export function storeData(data: UserData[] | never[]) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: STORING,
      payload: data,
    });
  };
}
