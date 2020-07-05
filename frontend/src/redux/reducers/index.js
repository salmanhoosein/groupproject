import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "./AuthReducer/AuthReducer";
import { profilesReducer } from "./ProfilesReducer/ProfilesReducer";
import { historyReducer } from "./HistoryReducer/HistoryReducer";

const rootReducer = combineReducers({
  profiles: profilesReducer,
  history: historyReducer,
  auth: authReducer,
});
export default rootReducer;
