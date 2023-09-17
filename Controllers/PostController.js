import { Post } from "../Models/post.js"

export const getPosts = async(req,res)=>{
    const posts = await Post.findAll()   
    return res.status(200).json(posts)
}

export const getUniquePost = async(req,res)=>{
    const idPost = req.params.id
    const post = await Post.findByPk(idPost)
    return res.status(200).json(post)
}