"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const components_1 = require("./components");
const config_1 = require("./middleware/config");
const app = (0, express_1.default)();
(0, config_1.config)(app);
(0, components_1.registerComponents)(app);
app.listen(process.env.PORT || 3000, function () {
    console.log("App started at port:", process.env.PORT || 3000);
});
exports.default = app;
