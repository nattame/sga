const express = require("express")

const {obtenerMaterias, obtenerMateria} = require("../controllers/materiaController.js")

const router = express.Router()

router.get("/", obtenerMaterias)

router.get("/:id", obtenerMateria)

module.exports = router;