"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerComponents = void 0;
const components_1 = __importDefault(require("./components"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false, //Disable the 'X-RateLimit' Header
});
const registerComponents = (app) => {
    app.use("/", apiLimiter, components_1.default);
};
exports.registerComponents = registerComponents;
