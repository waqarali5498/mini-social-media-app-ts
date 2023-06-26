import * as express from "express";
import * as controller from "./post.controller";

const router = express.Router();
router.post("/", controller.addPost);
router.get("/:postId", controller.getPost);
router.post("/post/:id/like",controller.likePost)
router.post("/post/:id/comment",controller.addComment)

export default router;
