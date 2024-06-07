export interface IServiveTokenCreateResponse {
  status: number;
  token: string;
  message: string;
  errors: { [key: string]: any };
}
