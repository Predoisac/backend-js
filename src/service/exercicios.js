class ServiceExercicio {

    Exercicio1Get() {
        const num1 = parseInt(req.params.num1);
        const num2 = parseInt(req.params.num2);

        res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
    }

    Exercicio1Post() {
        try {
            const num1 = parseFloat(req.body.num1);
            const num2 = parseFloat(req.body.num2);
            if (isNaN(num1) || isNaN(num2)) {
                throw new Error("favor so numero");
            }
            res.status(200).send(num1 + "+" + num2 + "=" + (num1 + num2))
        } catch (error) {
            res.status(500).send({
                msg: error.message,
                data: null,
                error: null
            })
        }

    }

    Exercicio2Get() {
        const horasTrabalhadas = req.params.horas;
        const salarioHora = req.params.dinheiro;

        res.status(200).send("salario por hora: " + salarioHora + ", horas trabalhadas: " + horasTrabalhadas + " = " + (salarioHora * horasTrabalhadas) + " de salário mensal")
    }

    Exercicio2Post() {
        console.log(req.body)
        const horasTrabalhadas = Number(req.body.horas);
        const salarioHora = Number(req.body.dinheiro);

        res.status(200).send("salario por hora: " + salarioHora + ", horas trabalhadas: " + horasTrabalhadas + " = " + (salarioHora * horasTrabalhadas) + " de salário mensal")
    }

    Exercicio3Get() {
        const pessoa1 = parseInt(req.params.pessoa1);
        const pessoa2 = parseInt(req.params.pessoa2);
        const pessoa3 = parseInt(req.params.pessoa3);
        const pessoa4 = parseInt(req.params.pessoa4);
        const pessoa5 = parseInt(req.params.pessoa5);

        res.status(200).send("pessoa 1: " + pessoa1 + ", pessoa 2: " + pessoa2 + ", pessoa 3: " + pessoa3 + ", pessoa 4: " + pessoa4 + ", pessoa 5: " + pessoa5 + " = média: " + ((pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5))
    }

    Exercicio3Post() {
        const pessoa1 = parseInt(req.body.pessoa1);
        const pessoa2 = parseInt(req.body.pessoa2);
        const pessoa3 = parseInt(req.body.pessoa3);
        const pessoa4 = parseInt(req.body.pessoa4);
        const pessoa5 = parseInt(req.body.pessoa5);

        res.status(200).send("pessoa 1: " + pessoa1 + ", pessoa 2: " + pessoa2 + ", pessoa 3: " + pessoa3 + ", pessoa 4: " + pessoa4 + ", pessoa 5: " + pessoa5 + " = média: " + ((pessoa1 + pessoa2 + pessoa3 + pessoa4 + pessoa5) / 5))
    }

    Exercicio4Get() {
        const celsius = parseFloat(req.params.celsius);

        res.status(200).send("Temperatura em Celsius: " + celsius + "C°" + " = " + ((9 * celsius + 160) / 5) + " Fahrenheit")
    }

    Exercicio4Post() {
        const celsius = parseFloat(req.body.celsius);

        res.status(200).send("Temperatura em Celsius: " + celsius + "C°" + " = " + ((9 * celsius + 160) / 5) + " Fahrenheit")
    }

    Exercicio5Get() {
        const milhas = parseFloat(req.params.milhas);

        res.status(200).send(milhas + " milhas são " + (milhas * 1.60934) + " kilometros")
    }

    Exercicio5Post() {
        const milhas = parseFloat(req.body.milhas);

        res.status(200).send(milhas + " milhas são " + (milhas + 1.60934) + " kilometros")
    }

    Exercicio6Get() {
        const duracao = req.params.duracao;

        res.status(200).send(duracao + " segundos são: " + (duracao / 60) + " minutos ou " + ((duracao / 60) / 60) + " horas")
    }

    Exercicio6Post() {
        const duracao = req.body.duracao;

        res.status(200).send(duracao + " segundos são: " + (duracao / 60) + " minutos ou " + ((duracao / 60) / 60) + " horas")
    }

    Exercicio7Get() {
        const km = req.params.km;

        res.status(200).send(km + " quilometros são: " + (km * 1000) + " metros ou " + ((km * 1000) * 100) + " centímetros")
    }

    Exercicio7Post() {
        const km = req.body.km;

        res.status(200).send(km + " quilometros são: " + (km * 1000) + " metros ou " + ((km * 1000) * 100) + " centímetros")
    }
}

export default new ServiceExercicio()