"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnErrorMessage = void 0;
const i18n_1 = require("i18n");
const returnErrorMessage = (code) => {
    console.log(code);
    switch (code) {
        case "40000":
            return (0, i18n_1.__)("ERROR_INVALID_EMAIL");
        case "40001":
            return (0, i18n_1.__)("ERROR_INVALID_PASSWORD");
        case "40002":
            return (0, i18n_1.__)("ERROR_INVALID_OTP");
        case "40003":
            return (0, i18n_1.__)("ERROR_INVALID_SECRET_AUTH");
        case "40004":
            return (0, i18n_1.__)("ERROR_INVALID_ENCRYPTED_SENDER_KEY");
        case "40005":
            return (0, i18n_1.__)("ERROR_INVALID_RECEIVER_ID");
        case "40006":
            return (0, i18n_1.__)("ERROR_INVALID_TERMINAL_ID");
        case "40007":
            return (0, i18n_1.__)("ERROR_INVALID_LOCALE");
        case "40008":
            return (0, i18n_1.__)("ERROR_INVALID_OLD_PASSWORD");
        case "40009":
            return (0, i18n_1.__)("ERROR_INVALID_NAME");
        case "40010":
            return (0, i18n_1.__)("ERROR_INVALID_SOCIAL_ID");
        case "40011":
            return (0, i18n_1.__)("ERROR_INVALID_ACCOUNT_TYPE");
        case "40012":
            return (0, i18n_1.__)("ERROR_INVALID_EMAIL_EXIST");
        case "40013":
            return (0, i18n_1.__)("ERROR_INVALID_ID");
        case "40014":
            return (0, i18n_1.__)("ERROR_INVALID_TEL");
        case "40015":
            return (0, i18n_1.__)("ERROR_INVALID_SPACE_NAME");
        case "40016":
            return (0, i18n_1.__)("ERROR_INVALID_SPACE_ID");
        case "40017":
            return (0, i18n_1.__)("ERROR_INVALID_RECEIVER_NAME");
        case "40018":
            return (0, i18n_1.__)("ERROR_INVALID_COLOR");
        case "40019":
            return (0, i18n_1.__)("ERROR_INVALID_FILE_ID");
        case "40020":
            return (0, i18n_1.__)("ERROR_INVALID_FILE_PATH");
        case "40021":
            return (0, i18n_1.__)("ERROR_INVALID_FILE_EXTENTIONS");
        case "40022":
            return (0, i18n_1.__)("ERROR_INVALID_FILE_SZIE");
        case "40023":
            return (0, i18n_1.__)("ERROR_NOT_FOUND");
        case "40024":
            return (0, i18n_1.__)("ERROR_INVALID_RECEIVING_SPACE");
        default:
            return code;
    }
};
exports.returnErrorMessage = returnErrorMessage;
