"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.verifyToken = exports.forgetPassword = exports.verifyTokenforAccount = exports.confirmEmail = exports.loginUser = exports.registerUser = void 0;
const service = __importStar(require("./auth.service"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const registerUser = yield service.registerUser(req.body);
        res.status(200).json({ message: registerUser });
    }
    catch (err) {
        console.log(err);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const loginUser = yield service.loginUser(email, password);
        res.status(200).json({ message: loginUser });
    }
    catch (err) {
        console.log(err);
    }
});
exports.loginUser = loginUser;
const confirmEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { email } = req.body;
        const confirmEmail = yield service.confirmEmail(email);
        res.status(200).json({ message: confirmEmail });
    }
    catch (err) {
        console.log(err);
    }
});
exports.confirmEmail = confirmEmail;
const verifyTokenforAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { token } = req.params;
        const verifyTokenforAccount = yield service.verifyTokenforAccount(token);
        res.status(200).json({ message: verifyTokenforAccount });
    }
    catch (err) {
        console.log(err);
    }
});
exports.verifyTokenforAccount = verifyTokenforAccount;
const forgetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const forgetPassword = yield service.forgetPassword(email);
        res.status(200).json({ message: forgetPassword });
    }
    catch (err) {
        console.log(err);
    }
});
exports.forgetPassword = forgetPassword;
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { token } = req.params;
        const verifyToken = yield service.verifyToken(token);
        res.status(200).json({ message: verifyToken });
    }
    catch (err) {
        console.log(err);
    }
});
exports.verifyToken = verifyToken;
const resetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const token = req.params.token;
        const password = req.body.password;
        const confirmPassword = req.body['confirm-password'];
        const resetPassword = yield service.resetPassword(token, password, confirmPassword);
        res.status(200).json({ message: resetPassword });
    }
    catch (err) {
        console.log(err);
    }
});
exports.resetPassword = resetPassword;
