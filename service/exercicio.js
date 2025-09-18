const exercicio1 = (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
}