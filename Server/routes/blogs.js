import express from "express";

import {
  getAllBlogPosts,
  addBlogPost,
  getpostbyauthor,
  updateSingleBlogPost,
  removeSingleBlogPost,
  likeBlogPost,
} from "../controllers/blogcontroller.js";

const router = express.Router();

router.get("/", getAllBlogPosts);
router.post("/", addBlogPost);
router.get("/:id", getpostbyauthor);
router.patch("/:id", updateSingleBlogPost);
router.delete("/:id", removeSingleBlogPost);
router.patch("/:id/likedBlogPost", likeBlogPost);

export default router;