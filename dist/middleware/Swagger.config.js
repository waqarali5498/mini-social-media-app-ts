"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
//Swagger integration
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Social API with Swagger",
            version: "0.1.0",
            description: "This is a API documentation for Social application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: process.env.API_URL,
            },
        ],
        components: {
            securitySchemes: {
                apiKeyAuth: {
                    type: "apiKey",
                    in: "header",
                    name: "Authorization",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                apiKeyAuth: [],
            },
        ],
    },
    apis: ["./src/components/**/*.ts"],
};
const swagger = (app) => {
    const specs = (0, swagger_jsdoc_1.default)(options);
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
exports.swagger = swagger;
