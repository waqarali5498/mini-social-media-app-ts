"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badImplementationException = exports.pageNoFoundException = exports.emailConflictException = exports.dataConflictException = exports.unauthorizedException = exports.forbiddenException = exports.dataExceedException = exports.userNotActivateException = exports.dataNotExistException = exports.validationException = exports.HttpException = void 0;
// import { Logger } from '../../middleware/log4';
const validationErrorMessages_1 = require("./validationErrorMessages");
class HttpException extends Error {
    constructor(statusCode, message, subStatusCode) {
        super(message);
        this.statusCode = statusCode || 500;
        this.message = message;
        this.errorMessage = message;
        this.subStatusCode = subStatusCode;
    }
}
exports.HttpException = HttpException;
const validationException = (errors) => {
    var _a, _b, _c, _d;
    //   errors ? Logger.error(errors) : Logger.error("Invalid Value");
    return new HttpException(400, ((_b = (_a = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.msg) && (0, validationErrorMessages_1.returnErrorMessage)((_d = (_c = errors === null || errors === void 0 ? void 0 : errors.errors) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.msg) || errors, 1001);
};
exports.validationException = validationException;
const dataNotExistException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(400, (error === null || error === void 0 ? void 0 : error.message) || error, 1002);
};
exports.dataNotExistException = dataNotExistException;
const userNotActivateException = (error) => {
    //   error && Logger.error(error) ;
    return new HttpException(400, error.message, 1003);
};
exports.userNotActivateException = userNotActivateException;
const dataExceedException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(400, error.message, 1004);
};
exports.dataExceedException = dataExceedException;
const forbiddenException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(403, (error === null || error === void 0 ? void 0 : error.message) || error, 2001);
};
exports.forbiddenException = forbiddenException;
const unauthorizedException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(401, (error === null || error === void 0 ? void 0 : error.message) || error, 2001);
};
exports.unauthorizedException = unauthorizedException;
const dataConflictException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(409, error || error.message, 3001);
};
exports.dataConflictException = dataConflictException;
const emailConflictException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(409, error.message, 2002);
};
exports.emailConflictException = emailConflictException;
const pageNoFoundException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(404, error.message, 4000);
};
exports.pageNoFoundException = pageNoFoundException;
const badImplementationException = (error) => {
    //   error && Logger.error(error)
    return new HttpException(500, error.message, 5000);
};
exports.badImplementationException = badImplementationException;
