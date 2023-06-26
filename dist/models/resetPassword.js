"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const resetSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true }
}, {
    timestamps: true,
    collection: "reset"
});
exports.reset = mongoose_1.default.model('resetSchema', resetSchema);
exports.default = exports.reset;
