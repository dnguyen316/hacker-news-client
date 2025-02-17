export interface SuccessResponse<T> {
  ok: true;
  data: T;
}

export interface ErrorResponse {
  ok: false;
  error: string;
}

export type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;
