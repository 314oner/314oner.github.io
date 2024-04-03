export interface ITokenDestroyResponse {
  status: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: { [key: string]: any } | null;
}
