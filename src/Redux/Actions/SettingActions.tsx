import { Dispatch } from "redux";
import { SETTING } from "../ActionTypes/ActionTypes";

export function saveSettings(settings: any) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SETTING,
      payload: settings,
    });
  };
}
