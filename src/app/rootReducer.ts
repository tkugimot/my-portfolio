import { combineReducers } from "redux";
import helloReducer from "../feature/helloSlice";

const rootReducer = combineReducers({
    hello: helloReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
