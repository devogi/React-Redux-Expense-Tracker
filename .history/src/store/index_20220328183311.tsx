import { combineReducers } from "redux";


interface AppState {
    user: any,
    
}

const rootReducer = combineReducers ({
    user : () => {},
    categories : () => {},
    records : () => {},

})

