import { combineReducers } from "redux";
import { success } from "./success";
import { guessedWord } from "./guessedWord";
export default combineReducers({ success: success, guessedWord: guessedWord });
