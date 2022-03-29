export interface ser {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}

export interface userState {
  data: user;
  loading: boolean;
}
