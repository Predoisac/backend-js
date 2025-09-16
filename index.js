import express from "express"

const app = express();  //inicalizando api through express

app.get("/api/pessoa/:id", (req, res) => {
    const nome = req.query.nome;
    res.status(200).send("Hello " + nome);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})