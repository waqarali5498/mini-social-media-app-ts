import express from "express";
import components from "./components";

import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 Minutes
  max: 300, //Limit Each api for 300 requesr per window per 15 min
  standardHeaders: true, //retrun rateLimit info in 'RateLimit-' headers
  legacyHeaders: false, //Disable the 'X-RateLimit' Header
});

export const registerComponents = (app: express.Application) => {
  app.use("/", apiLimiter, components);
};
