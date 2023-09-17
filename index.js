import express from 'express'
import { conn } from './Db/db.js';

const app = express();
const port = 8000;


app.get("/", (req,res)=>{
    res.send("Hello")
})

conn.sync().then(()=>{
    app.listen(port)
    console.log("Rodando sequelize!")
})

