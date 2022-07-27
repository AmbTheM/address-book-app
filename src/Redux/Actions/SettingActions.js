import { SETTING } from "../ActionTypes/ActionTypes";

export function saveSettings(settings) {
  return (dispatch) => {
    dispatch({
      type: SETTING,
      payload: settings,
    });
  };
}
