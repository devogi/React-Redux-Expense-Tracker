import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

interface AppState {
    user: 
    categories: any;
    records: any;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer
    categories: () => { },
    records: () => { },
});

export default rootReducer;
