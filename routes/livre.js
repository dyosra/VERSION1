const express = require('express')
const router = express.Router()
const LivreController = require('../controllers/livre.controllers')

router.get("/", LivreController.getAllLivre)
router.post("/", LivreController.createLivre)
module.exports = router