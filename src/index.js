import express from "express"
import router from "./routes/exercicios";

const app = express();  //inicalizando api through express

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
