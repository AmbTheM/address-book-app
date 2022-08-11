import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "./modalReducer";
import searchResultReducer from "./searchResultsReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  settingsReducer,
  dataReducer,
  modalReducer,
  searchResultReducer,
  loadingReducer,
});

export default rootReducer;
