import express from 'express'
import { conn } from './Db/db.js';
import cors from 'cors'
import { router } from './Rotas/routes.js';

const app = express();
const port = 8000;

app.use(express.json())
app.use(cors())

app.use("/", router)

conn.sync().then(()=>{
    app.listen(port)
    console.log("Rodando sequelize!")
})

