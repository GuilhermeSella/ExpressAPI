import { Post } from "../Models/post"

export const GetPosts = async(req,res)=>{
    const posts = await Post.findAll()   
    return res.status(200).json(posts)
}

export const GetUniquePost = async(req,res)=>{
    const idPost = req.params.id
    const post = await Post.findByPk(idPost)
}