// import { Logger } from '../../middleware/log4';
import { returnErrorMessage } from './validationErrorMessages';
export class HttpException extends Error {
  statusCode?: number;
  message: string;
  errorMessage: string;
  subStatusCode?: number;
  constructor(statusCode: number, message: string, subStatusCode: number) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
    this.errorMessage = message;
    this.subStatusCode = subStatusCode;
  }
}
export const validationException = (errors: any) => {
//   errors ? Logger.error(errors) : Logger.error("Invalid Value");
  return new HttpException(400,errors?.errors?.[0]?.msg&&returnErrorMessage(errors?.errors?.[0]?.msg) ||errors, 1001);
};
export const dataNotExistException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(400, error?.message || error, 1002);
};
export const userNotActivateException = (error: any) => {
//   error && Logger.error(error) ;
  return new HttpException(400, error.message, 1003);
};
export const dataExceedException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(400, error.message, 1004);
};
export const forbiddenException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(403, error?.message||error, 2001);
};
export const unauthorizedException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(401, error?.message||error, 2001);
};
export const dataConflictException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(409, error || error.message, 3001);
};
export const emailConflictException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(409, error.message , 2002);
};
export const pageNoFoundException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(404, error.message, 4000);
};
export const badImplementationException = (error: any) => {
//   error && Logger.error(error)
  return new HttpException(500, error.message, 5000);
};