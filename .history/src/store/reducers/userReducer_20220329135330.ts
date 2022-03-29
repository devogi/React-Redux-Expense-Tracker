import { UserAction } from "./../../../.history/src/types/user_20220329134924";
import { userState } from "./../../../.history/src/types/user_20220328184427";

const defaultState : UserState = {
    data : {}
}

const userReducer = (state: userState, action: UserAction) => {
  return state;
};

export default userReducer;
