import express from "express"

const app = express();  //inicalizando api through express

app.get("/api/pessoa/:id", (req, res) => {
    const nome = req.query.nome;
    res.status(200).send("Hello " + nome);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

app.get("/exercicio1/:num1/:num2", exercicio1())

app.get("/exercicio2/:dinheiro/:horas", (req,res) => {
    const horasTrabalhadas = req.params.horas;
    const salarioHora = req.params.dinheiro;

    res.status(200).send("salario por hora: " + salarioHora + ", horas trabalhadas: " + horasTrabalhadas + " = " + (salarioHora * horasTrabalhadas) + " de salário mensal" )
})

app.get("/exercicio3/:pessoa1/:pessoa2/:pessoa3/:pessoa4/:pessoa5", (req, res) => {
    const pessoa1 = parseInt(req.params.pessoa1);
    const pessoa2 = parseInt(req.params.pessoa2);
    const pessoa3 = parseInt(req.params.pessoa3);
    const pessoa4 = parseInt(req.params.pessoa4);
    const pessoa5 = parseInt(req.params.pessoa5);

    res.status(200).send("pessoa 1: " + pessoa1 + ", pessoa 2: " + pessoa2 +", pessoa 3: " + pessoa3 +", pessoa 4: " + pessoa4 +", pessoa 5: " + pessoa5 + " = média: " + ((pessoa1 + pessoa1 + pessoa1 + pessoa1 + pessoa1) / 5))
})

app.get("/exercicio4/:celsius", (req,res) => {
    const celsius = parseFloat(req.params.celsius);

    res.status(200).send("Temperatura em Celsius: " + celsius + "C°" + " = " + ((9 * celsius + 160) / 5) + " Fahrenheit")
})

app.get("/exercicio5/:milhas", (req,res) => {
    const milhas = parseFloat(req.params.milhas);

    res.status(200).send(milhas + " milhas são " + (milhas + 1.60934) + " kilometros")
})

app.get("/exercicio6/:duracao", (req, res) => {
    const duracao = req.params.duracao;

    res.status(200).send()
})