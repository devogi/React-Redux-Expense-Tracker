import { UserState } from './../../../.history/src/types/user_20220329135521';
import { User } from './../../../.history/src/types/user_20220329134442';
import { UserAction } from "./../../../.history/src/types/user_20220329134924";
import { userState } from "./../../../.history/src/types/user_20220328184427";

const defaultState: UserState = {
  data: {} as User,
  loading: false,
  error: " ",
};

const userReducer = (state: userState, action: UserAction) => {
  return state;
};

export default userReducer;
