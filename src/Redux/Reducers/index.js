import { combineReducers } from "redux";
import persistedReducer from "./persistReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
};

const pReducer = persistReducer(persistConfig, persistedReducer);

const rootReducer = combineReducers({
  pReducer,
});

export default rootReducer;
