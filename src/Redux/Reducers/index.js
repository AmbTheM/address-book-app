import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  settingsReducer,
  dataReducer,
  modalReducer,
});

export default rootReducer;
