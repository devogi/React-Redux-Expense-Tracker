import { combineReducers } from "redux";


interface AppState {
    user: any,
    categories: any,
}

const rootReducer = combineReducers ({
    user : () => {},
    categories : () => {},
    records : () => {},

})

