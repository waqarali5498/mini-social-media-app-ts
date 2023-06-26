import * as express from "express";
import * as controller from "./myprofile.controller";

const router = express.Router();
router.get("/data", controller.getProfile);
router.put("/data/:id", controller.updateProfile);
router.get("/posts", controller.getAllPost);
router.get("/post/:postId", controller.getPost);

router.get("/", (req,res) => {
    res.json({name:"Get Your Own Profile"})
});



export default router;
