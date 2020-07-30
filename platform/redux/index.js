import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";

import {
  MODULE_NAME as usersModuleName,
  reducer as usersReducer,
} from "./users";

const config = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [usersModuleName]: usersReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);

const store = createStore(
  rootPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
