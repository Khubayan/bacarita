export interface VerifyTokenRequestUserdata {
  exp: number;
  data: UserData;
}

export interface UserData {
  id: number;
  name: string;
}
