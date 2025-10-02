import express from "express"
import ServiceExercicio from "../service/exercicios"

const router = express.Router()

router.get("/exercicio1/:num1/:num2", ServiceExercicio.Exercicio1Get)
router.post("/exercicio1", ServiceExercicio.Exercicio1Post)

router.get("/exercicio2/:dinheiro/:horas", ServiceExercicio.Exercicio2Get)
router.post("/exercicio2", ServiceExercicio.Exercicio2Post)

router.get("/exercicio3/:pessoa1/:pessoa2/:pessoa3/:pessoa4/:pessoa5", ServiceExercicio.Exercicio3Get)
router.post("/exercicio3", ServiceExercicio.Exercicio3Post)

router.get("/exercicio4/:celsius", ServiceExercicio.Exercicio4Get)
router.post("/exercicio4", ServiceExercicio.Exercicio4Post)

router.get("/exercicio5/:milhas", exercicio5Get)
router.post("/exercicio5", exercicio5Post)

router.get("/exercicio6/:duracao", exercicio6Get)
router.post("/exercicio6", exercicio6Post)

router.get("/exercicio7/:km", exercicio7Get)
router.post("/exercicio7", exercicio7Post)

export default router