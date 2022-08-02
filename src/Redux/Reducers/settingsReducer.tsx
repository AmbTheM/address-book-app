import { SettingsData } from "../../Services/Database/DataType";
import { ActionSettings, SETTING } from "../ActionTypes/ActionTypes";

export default function settingsReducer(
  state: SettingsData = { nationalities: [], gender: "" },
  action: ActionSettings
) {
  switch (action.type) {
    case SETTING:
      state = action.payload;
      return state;
    default:
      return state;
  }
}
