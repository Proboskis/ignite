import {combineReducers} from "@reduxjs/toolkit";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;