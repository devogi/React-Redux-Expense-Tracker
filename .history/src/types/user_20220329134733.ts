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
  type: ""
}
