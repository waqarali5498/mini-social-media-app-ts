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
exports.connectMongo = exports.mongoUri = void 0;
const bluebird_1 = __importDefault(require("bluebird"));
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("./env");
// import { Logger } from ‘./log4’;
mongoose_1.default.Promise = bluebird_1.default;
exports.mongoUri = `${env_1.MONGO_DB_CONNECTION_STRING}/social-app`;
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: false,
};
const connectMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default.set("strictQuery", false);
    console.log(exports.mongoUri);
    yield mongoose_1.default
        .connect(exports.mongoUri, config)
        .then((db) => {
        console.log("connected to db");
    })
        .catch((err) => {
        console.log(err);
    });
    return Promise.resolve();
});
exports.connectMongo = connectMongo;
