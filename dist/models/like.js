"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.like = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const likeSchema = new mongoose_1.default.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    likeStatus: { type: String, required: true },
    createdAt: { type: String, required: true },
}, {
    timestamps: true,
    collection: "like" //if you want to store both like and comments
});
exports.like = mongoose_1.default.model('likeSchema', likeSchema);
