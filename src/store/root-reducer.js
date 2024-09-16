import { combineReducers } from "redux";
import { positionsReducer } from "./positions/positions-reduser";
import { filtersReducer } from "./filters/filters-reduser";


export const rootReducer = combineReducers({
    positions: positionsReducer,
    filters: filtersReducer
});