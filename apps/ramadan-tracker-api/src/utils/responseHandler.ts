import { Response } from 'express';
import type { ErrorResponse, SuccessResponse } from './type';

/**
 * Sends a success response.
 * @param res - Express response object.
 * @param statusCode - HTTP status code (default: 200).
 * @param message - Success message.
 * @param data - Response payload.
 */
const sendSuccess = <T>(
  res: Response,
  statusCode = 200,
  message = `Data ${
    res.statusCode === 200 ? 'retrieved' : 'saved'
  } successfully.`,
  data: T = {} as T
): Response<SuccessResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Sends an error response.
 * @param res - Express response object.
 * @param statusCode - HTTP status code (default: 500).
 * @param message - Error message.
 * @param errors - Error details.
 */
const sendError = (
  res: Response,
  statusCode = 500,
  message = 'Something went wrong, please try again later.',
  errors = {}
): Response<ErrorResponse> => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

export { sendError, sendSuccess };
