export interface IServiceUserGoogleCreateResponse {
  status: number;
  message: string;
  user: any;
  token: string;
  errors: { [key: string]: any };
}
