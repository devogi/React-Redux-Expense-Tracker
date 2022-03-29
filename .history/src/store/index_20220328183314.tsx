import { combineReducers } from "redux";


interface AppState {
    user: any,
    cate
}

const rootReducer = combineReducers ({
    user : () => {},
    categories : () => {},
    records : () => {},

})

