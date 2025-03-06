type SuccessResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

type ErrorResponse = {
  success: boolean;
  message: string;
  errors: Record<string, unknown>;
};

export type { ErrorResponse, SuccessResponse };
