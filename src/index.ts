import  express  from "express";
import { registerComponents } from "./components";
import { config } from "./middleware/config";
const app = express();

config(app)
registerComponents(app)

app.listen(process.env.PORT || 3000, function () {
  console.log("App started at port:", process.env.PORT || 3000);
});

export default app;
