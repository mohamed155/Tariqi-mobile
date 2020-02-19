export class AppResponse {
  response: any;
  error: {
    status: boolean,
    msg: string
  };
  totalPages: number;
}
