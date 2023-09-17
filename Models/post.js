import { DataTypes } from "sequelize";
import { conn } from "../Db/db";


export const Post = conn.define("Post", {
    idPost:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Usuario:{ 
        type: DataTypes.STRING(50),
        allowNull:false
    },

    Texto:{ type: DataTypes.TEXT },


})