import { combineReducers } from "redux";


interface AppState {
    user: any,
    cat
}

const rootReducer = combineReducers ({
    user : () => {},
    categories : () => {},
    records : () => {},

})

