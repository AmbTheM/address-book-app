import { combineReducers } from "redux";
import persistedReducer from "./persistReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import settingsReducer from "./settingsReducer";

const persistConfig = {
  key: "root",
  storage,
};

const pReducer = persistReducer(persistConfig, persistedReducer);

const rootReducer = combineReducers({
  settingsReducer,
  pReducer,
});

export default rootReducer;
