"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.verifyToken = exports.forgetPassword = void 0;
const models_1 = require("../../../models/");
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const forgetPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let error, data;
    try {
        crypto_1.default.randomBytes(32, (err, buffer) => {
            if (err) {
                console.log(err);
            }
            const token = buffer.toString('hex');
            const result = models_1.USER.updateOne({ email: email }, { $set: { token: token } }, (error, result) => {
                if (error) {
                    console.log(error);
                }
                // Send an email to the user's email address with a link containing the generated token
                const transporter = nodemailer_1.default.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'waqarali5498@gmail.com',
                        pass: 'oqaequzmstmpsdsa'
                    }
                });
                const mailOptions = {
                    from: 'waqarali5498@gmail.com',
                    to: email,
                    subject: 'Password Reset Request',
                    text: `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\nhttp://${'localhost:3001/user/password'}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log('Email sent: ' + info.response);
                });
            });
        });
        data = {
            message: "Forget Password Email Sent Succesfully",
            success: true,
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.forgetPassword = forgetPassword;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const result = yield models_1.USER.findOne({ token: token }, (err, user) => {
            if (err) {
                console.log(err);
            }
            if (!user) {
                console.log('Invalid reset password token');
            }
        });
        if (result) {
            models_1.USER.updateOne({ email: result.email }, { $unset: { token: '' } });
        }
        data = {
            message: "User Verified Succesfully",
            success: true,
        };
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.verifyToken = verifyToken;
const resetPassword = (token, password, confirmPassword) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        if (password === confirmPassword) {
            const result = yield models_1.RESET.findOne({ token: token }, (err, user) => {
                if (err) {
                    console.log(err);
                }
                if (!user) {
                    console.log('Invalid reset password token');
                }
                return user;
            });
            const hashedPassword = bcryptjs_1.default.hash(password, 10);
            if (result) {
                models_1.USER.updateOne({ email: result.email }, { $set: { password: hashedPassword }, $unset: { token: '' } });
            }
            data = {
                message: "Password Updated Succesfully",
                success: true,
            };
        }
    }
    finally {
    }
    if (error) {
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.resetPassword = resetPassword;
