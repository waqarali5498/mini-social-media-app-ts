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
exports.resetPassword = exports.verifyToken = exports.forgetPassword = exports.verifyTokenforAccount = exports.confirmEmail = exports.loginUser = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "HelloWorld@321";
const apiErrorHandler_1 = require("../../utils/apiErrorHandler");
const models_1 = require("../../../models/");
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
const registerUser = ({ email, name, gender, phone, birthday, province, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        // Logger.info("Register User");
        session = yield models_1.USER.startSession();
        session.startTransaction();
        console.log("token is checked");
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        let userData = {
            email: email,
            password: hashedPassword,
            name: name,
            gender: gender,
            phone: phone,
            birthday: birthday,
            province: province,
            verificationToken: " ",
            isVerified: false
        };
        const newUser = new models_1.USER(userData);
        newUser.save({ session });
        data = {
            message: "User has been registered",
            success: true,
            newUser: newUser,
        };
        yield session.commitTransaction();
    }
    catch (err) {
        error = err instanceof Error ? err : (0, apiErrorHandler_1.badImplementationException)(err);
        if (session)
            yield session.abortTransaction();
    }
    finally {
        if (session)
            session.endSession();
    }
    if (error) {
        // Logger.error(error);
        return Promise.reject(error);
    }
    else {
        return Promise.resolve(data);
    }
});
exports.registerUser = registerUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        console.log(`loginUser: email = ${email}, password = ${password}`);
        const user = yield models_1.USER.findOne({ email: email });
        console.log(user);
        if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
            const token = jsonwebtoken_1.default.sign({
                name: user.name,
                id: user._id,
            }, JWT_SECRET);
            data = {
                message: "User Login Suucessfully",
                success: true,
                token: token,
            };
        }
        else {
            data = {
                message: "Invalid email or password",
                success: false,
            };
        }
    }
    catch (err) {
        error = err instanceof Error ? err : (0, apiErrorHandler_1.badImplementationException)(err);
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
exports.loginUser = loginUser;
const confirmEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    let error, data;
    try {
        crypto_1.default.randomBytes(32, (err, buffer) => {
            if (err) {
                console.log(err);
            }
            const token = buffer.toString('hex');
            const result = models_1.USER.updateOne({ email: email }, { $set: { verificationToken: token } }, (error, result) => {
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
                    subject: 'Email Confirmation',
                    text: `You are receiving this email because you (or someone else) has signup on our social app through email.\n\nPlease click on the following link, or paste this into your browser to complete the process and Confirm your email:\n\nhttp://${'localhost:3001/user/password'}/reset/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`
                };
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log('Verification Email sent: ' + info.response);
                });
            });
        });
        data = {
            message: "Verification Email Sent Succesfully",
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
exports.confirmEmail = confirmEmail;
const verifyTokenforAccount = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let error, session, data;
    try {
        const result = yield models_1.USER.findOne({ token: token }, (err, user) => {
            if (err) {
                console.log(err);
            }
            if (!user) {
                console.log('Invalid Verification token');
            }
        });
        if (result) {
            models_1.USER.updateOne({ email: result.email }, { $set: { isVerified: true }, $unset: { token: '' } });
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
exports.verifyTokenforAccount = verifyTokenforAccount;
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
