import { combineReducers } from "redux";


interface AppState {
    user: any,
    categories: any,
    records : any,
}

const rootReducer = combineReducers<AppState>   ({
    user : () => {},
    categories : () => {},
    records : () => {},f

})

export default rootReducer
