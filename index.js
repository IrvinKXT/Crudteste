const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgames",
});

app.get('/', (req, res) => {
    res.send("hello world");
})

const porta = 3001
app.listen(porta, ()=>{
    console.log("rodando servidor");
})