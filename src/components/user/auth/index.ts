import * as express from "express";
import * as controller from "./auth.controller";

const router = express.Router();
router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);
router.post("/register/email/confirm", controller.confirmEmail);
router.get("/register/email/confirm:token", controller.verifyTokenforAccount);


router.put("/forget", controller.forgetPassword);
router.get("/reset/:token", controller.verifyToken);
router.post("/reset", controller.resetPassword);

router.get("/", (req,res) => {
    res.json({Hit:"/user/auth"})
});



export default router;
