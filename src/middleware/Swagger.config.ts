import { Application } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

//Swagger integration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Social API with Swagger",
      version: "0.1.0",
      description:
        "This is a API documentation for Social application made with Express and documented with Swagger",
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

export const swagger = (app: Application) => {
  const specs = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
