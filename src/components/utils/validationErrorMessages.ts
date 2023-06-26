import { __ } from 'i18n';
export const returnErrorMessage = (code:string) =>{
    console.log(code)
    switch(code)
    {
        case "40000":
            return __("ERROR_INVALID_EMAIL");
        case "40001":
            return __("ERROR_INVALID_PASSWORD");
        case "40002":
            return __("ERROR_INVALID_OTP");
        case "40003":
            return __("ERROR_INVALID_SECRET_AUTH");
        case "40004":
            return __("ERROR_INVALID_ENCRYPTED_SENDER_KEY");
        case "40005":
            return __("ERROR_INVALID_RECEIVER_ID");
        case "40006":
            return __("ERROR_INVALID_TERMINAL_ID");
        case "40007":
            return __("ERROR_INVALID_LOCALE");
        case "40008":
            return __("ERROR_INVALID_OLD_PASSWORD");
        case "40009":
            return __("ERROR_INVALID_NAME");
        case "40010":
            return __("ERROR_INVALID_SOCIAL_ID");
        case "40011":
            return __("ERROR_INVALID_ACCOUNT_TYPE");
        case "40012":
            return __("ERROR_INVALID_EMAIL_EXIST");
        case "40013":
            return __("ERROR_INVALID_ID");
        case "40014":
            return __("ERROR_INVALID_TEL");
        case "40015":
            return __("ERROR_INVALID_SPACE_NAME");
        case "40016":
            return __("ERROR_INVALID_SPACE_ID");
        case "40017":
            return __("ERROR_INVALID_RECEIVER_NAME");
        case "40018":
            return __("ERROR_INVALID_COLOR");
        case "40019":
            return __("ERROR_INVALID_FILE_ID");
        case "40020":
            return __("ERROR_INVALID_FILE_PATH");
        case "40021":
            return __("ERROR_INVALID_FILE_EXTENTIONS");
        case "40022":
            return __("ERROR_INVALID_FILE_SZIE");
         case "40023":
            return __("ERROR_NOT_FOUND");
         case "40024":
            return __("ERROR_INVALID_RECEIVING_SPACE");
        default:
            return code;
    }
}