import { combineReducers } from "redux";

interface AppState {
    user: any;
    categories: any;
    records: any;
}

const rootReducer = combineReducers<AppState>({
    user: usre
    categories: () => { },
    records: () => { },
});

export default rootReducer;
