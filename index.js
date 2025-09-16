import express from "express"

const app = express();  //inicalizando api through express

app.get("/api/pessoa/:id", (req, res) => {
    const nome = req.query.nome;
    res.status(200).send("Hello " + nome);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

app.get("/exercicio1/:num1/:num2",(req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
})