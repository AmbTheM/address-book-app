import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "./modalReducer";
import searchResultReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  settingsReducer,
  dataReducer,
  modalReducer,
  searchResultReducer,
});

export default rootReducer;
