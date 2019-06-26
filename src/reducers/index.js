import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  // Dummy Reducers
  posts: postReducer,
  users: userReducer
});
