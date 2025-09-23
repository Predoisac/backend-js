export const exercicio1Get = (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
}

export const exercicio1Post = (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);

    res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
}