import express from "express"
import {getPosts, getUniquePost, createPost, updatePost, deletePost} from "../Controllers/PostController.js"



export const router  = express.Router();


router.get("/posts", getPosts);

router.get("/post/:id", getUniquePost);

router.post("/post", createPost );

router.put("/post/:id", updatePost);

router.delete("/post/:id", deletePost);