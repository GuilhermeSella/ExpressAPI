import express from "express"
import {getPosts, getUniquePost} from "../Controllers/PostController.js"



export const router  = express.Router();


router.get("/posts", getPosts);

router.get("/post/:id", getUniquePost);