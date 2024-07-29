export interface IServiceUserCreateResponse {
  status: number;
  message: string;
  user: any;
  errors: { [key: string]: any };
}
