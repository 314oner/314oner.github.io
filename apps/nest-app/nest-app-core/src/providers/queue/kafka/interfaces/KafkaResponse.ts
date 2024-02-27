export interface IHeaders {
  [key: string]: any;
}
export interface KafkaResponse<T = any> {
  response: T;
  key: string;
  timestamp: string;
  offset: number;
  headers?: IHeaders;
}
