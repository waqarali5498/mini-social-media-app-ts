"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB_CONNECTION_STRING = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    dotenv_1.default.config({ path: '.env' });
}
const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
exports.MONGO_DB_CONNECTION_STRING = MONGO_DB_CONNECTION_STRING;
