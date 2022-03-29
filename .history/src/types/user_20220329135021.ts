export interface User {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}

export interface userState {
  data: User;
  loading: boolean;
  error: string;
}

interface GET_START {
  type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
  type: "LOGIN_ERROR";
}
interface LOGIN_S_ {
  type: "LOGIN_";
}



export type UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR