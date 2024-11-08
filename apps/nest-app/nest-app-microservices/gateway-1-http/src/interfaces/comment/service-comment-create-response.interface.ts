export interface IServiceCommentCreateResponse {
  status: number;
  message: string;
  comment: any;
  errors: { [key: string]: any };
}
