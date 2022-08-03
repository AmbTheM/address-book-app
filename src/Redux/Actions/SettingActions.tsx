import { Dispatch } from "redux";
import { SettingsData } from "../../Services/Database/DataType";
import { SETTING } from "../ActionTypes/ActionTypes";

export function saveSettings(settings: SettingsData) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SETTING,
      payload: settings,
    });
  };
}
