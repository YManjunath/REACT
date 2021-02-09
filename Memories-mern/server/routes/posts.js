import express from "express";
import { getPosts, createPost,updatePost,deletePost,likePost } from "../Controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id",updatePost)         // update the post 
router.delete("/:id",deletePost)        // delete the post
router.patch("/:id/likePost",likePost);

export default router;
