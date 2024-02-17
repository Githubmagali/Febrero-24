import mysql from "serverless-mysql";

export const pool = mysql({
    config:{
        host: 'localhost',
        user: 'root',
        password: 'Magali1834',
        port: 3306,
        database: 'nextmysql'

    }
})