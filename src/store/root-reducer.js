import { combineReducers } from "redux";
import { positionsReducer } from "./positions/positions-reduser";


export const rootReducer = combineReducers({
    positions: positionsReducer,
});