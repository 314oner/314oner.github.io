export interface IServiceLikeCreateResponse {
  status: number;
  message: string;
  user: any;
  errors: { [key: string]: any };
}
