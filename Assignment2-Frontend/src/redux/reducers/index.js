import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { authReducer } from "./AuthReducer/AuthReducer";
import { profilesReducer } from "./ProfilesReducer/ProfilesReducer";
import { historyReducer } from "./HistoryReducer/HistoryReducer";

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    profiles: profilesReducer,
    history: historyReducer,
    auth: authReducer,
  });
}
