import { Sequelize } from "sequelize";

export const conn = new Sequelize('apiExpress', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
})