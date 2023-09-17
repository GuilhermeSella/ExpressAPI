import { Post } from "../Models/post.js"

export const getPosts = async(req,res)=>{
    const posts = await Post.findAll()   
    return res.status(200).json(posts)
}

export const getUniquePost = async(req,res)=>{
    const idPost = req.params.idPost
    const post = await Post.findByPk(idPost)
    return res.status(200).json(post)
}

export const createPost = async(req,res)=>{
    const post = await Post.create({
        Usuario:req.body.Usuario,
        Texto:req.body.Texto
    })
    
}
export const updatePost = async(req,res)=>{
    const post = await Post.update({
        Usuario:req.body.Usuario,
        Texto:req.body.Texto
    },
    { 
        where:{idPost:req.params.id}
    }
    
    )
}

export const deletePost = async(req,res)=>{
    await Post.destroy({
        where:{
            idPost:req.params.id
        }
    })
}