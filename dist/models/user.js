"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: String, required: true },
    province: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, required: true },
    verificationToken: { type: String, required: true }
}, {
    timestamps: true,
    collection: "user"
});
exports.User = mongoose_1.default.model('UserSchema', UserSchema);
exports.default = exports.User;
