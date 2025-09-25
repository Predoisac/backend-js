import express from "express"
import { exercicio1Get, exercicio1Post, exercicio2Get, exercicio2Post, exercicio3Get, exercicio3Post, exercicio4Get, exercicio4Post, exercicio5Get, exercicio5Post, exercicio6Get, exercicio6Post, exercicio7Get, exercicio7Post } from "./service/exercicios.js";

const app = express();  //inicalizando api through express
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

app.get("/exercicio1/:num1/:num2", exercicio1Get)
app.post("/exercicio1", exercicio1Post)

app.get("/exercicio2/:dinheiro/:horas", exercicio2Get)
app.post("/exercicio2", exercicio2Post)

app.get("/exercicio3/:pessoa1/:pessoa2/:pessoa3/:pessoa4/:pessoa5", exercicio3Get)
app.post("/exercicio3", exercicio3Post)

app.get("/exercicio4/:celsius", exercicio4Get)
app.post("/exercicio4", exercicio4Post)

app.get("/exercicio5/:milhas", exercicio5Get)
app.post("/exercicio5", exercicio5Post)

app.get("/exercicio6/:duracao", exercicio6Get)
app.post("/exercicio6", exercicio6Post)

app.get("/exercicio7/:km", exercicio7Get)
app.post("/exercicio7", exercicio7Post)